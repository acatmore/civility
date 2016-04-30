Meteor.publish('getResidentsByIds', function(residentsArray) {
  return Meteor.users.find({$in: residentsArray})
})