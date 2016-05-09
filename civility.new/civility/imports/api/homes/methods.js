import _ from 'underscore';
import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import {Email} from 'meteor/email';
 
import { Homes } from './collection';
 
function getContactEmail(user) {
  if (user.emails && user.emails.length)
    return user.emails[0].address;
 
  if (user.services && user.services.facebook && user.services.facebook.email)
    return user.services.facebook.email;
 
  return null;
}
 
export function invite(homeId, userId) {
  check(homeId, String);
  check(userId, String);
 
  if (!this.userId) {
    throw new Meteor.Error(400, 'You have to be logged in!');
  }
 
  const home = Homes.findOne(homeId);
 
  if (!home) {
    throw new Meteor.Error(404, 'No such home!');
  }
 
  if (home.owner !== this.userId) {
    throw new Meteor.Error(404, 'No permissions!');
  }
 
  if (home.public) {
    throw new Meteor.Error(400, 'That home is public. No need to invite people.');
  }
 
  if (userId !== home.owner && ! _.contains(home.invited, userId)) {
    Homes.update(homeId, {
      $addToSet: {
        invited: userId
      }
    });
 
    const replyTo = getContactEmail(Meteor.users.findOne(this.userId));
    const to = getContactEmail(Meteor.users.findOne(userId));
 
    if (Meteor.isServer && to) {
      Email.send({
        to,
        replyTo,
        from: 'noreply@civility.com',
        subject: `home: ${home.title}`,
        text: `
          Hey, I just invited you to ${home.title} on Civility.
          Come check it out: ${Meteor.absoluteUrl()}
        `
      });
    }
  }
}

export function move(homeId, move) {
  check(homeId, String);
  check(move, String);
 
  if (!this.userId) {
    throw new Meteor.Error(403, 'You must be logged in to move');
  }
 
  if (!_.contains(['yes', 'no', 'maybe'], move)) {
    throw new Meteor.Error(400, 'Invalid move');
  }
 
  const home = Homes.findOne({
    _id: homeId,
    $or: [{
      // is public
      $and: [{
        public: true
      }, {
        public: {
          $exists: true
        }
      }]
    },{
      // is owner
      $and: [{
        owner: this.userId
      }, {
        owner: {
          $exists: true
        }
      }]
    }, {
      // is invited
      $and: [{
        invited: this.userId
      }, {
        invited: {
          $exists: true
        }
      }]
    }]
  });
 
  if (!home) {
    throw new Meteor.Error(404, 'No such home');
  }
 
  const hasUserMove = _.findWhere(home.moves, {
    user: this.userId
  });
 
  if (!hasUserMove) {
    // add new move entry
    Homes.update(homeId, {
      $push: {
        move: {
          move,
          user: this.userId
        }
      }
    });
  } else {
    // update move entry
    const userId = this.userId;
    Homes.update({
      _id: homeId,
      'moves.user': userId
    }, {
      $set: {
        'moves.$.move': move
      }
    });
  }
}
 
Meteor.methods({
  invite,
  move
});