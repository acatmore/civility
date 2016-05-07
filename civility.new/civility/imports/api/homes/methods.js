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
 
export function invite(partyId, userId) {
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
 
Meteor.methods({
  invite
});