import { Meteor } from 'meteor/meteor';
import { Counts} from 'meteor/tmeasday:publish-counts';
 
import { Homes } from './collection';
 
if (Meteor.isServer) {
  Meteor.publish('homes', function(options, searchString) {
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
    //if no parameter, return the whole collection
    if (typeof searchString === 'string' && searchString.length) {
      selector.name = {
        $regex: `.*${searchString}.*`,
        $options: 'i'
      };
    }
  //query homes that should be available to client, but without option (and tmeasday)it returns all
     Counts.publish(this, 'numberOfHomes', Homes.find(selector), {
      //ready only after the main collection cursor is ready
      noReady: true
    });
    return Homes.find(selector, options);
  });
}