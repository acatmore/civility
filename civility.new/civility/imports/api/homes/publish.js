import { Meteor } from 'meteor/meteor';
 
import { Homes } from './collection';
 
if (Meteor.isServer) {
  Meteor.publish('homes', function(options) {
    const selector = {
      $or: [{
        // the public homes
        $and: [{
          public: true
        }, {
          public: {
            $exists: true
          }
        }]
      }, {
        // when logged in user is the owner
        $and: [{
          owner: this.userId
        }, {
          owner: {
            $exists: true
          }
        }]
      }]
    };
 
    return Homes.find(selector, options);
  });
}