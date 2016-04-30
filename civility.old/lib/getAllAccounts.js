
// This is very very insecure -- it is publishing all data about all users to everyone
// LOOK FOR HOW TO MAKE SECURE

if (Meteor.isServer) {
  Meteor.publish("allusers",function() {
    return Meteor.users.find();
  });      
}

else if (Meteor.isClient) {
  Meteor.subscribe('allusers');
}
