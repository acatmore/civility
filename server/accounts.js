
  Meteor.methods({
    addUser: function(details) {
      var profile = {name: details.name, rentPayment: details.rentPayment}
      // , home: details.home
      var veryNewUserId = Accounts.createUser({
        email: details.email,
        profile: profile,

        // name: myName
      });
      Accounts.sendEnrollmentEmail(veryNewUserId)
      console.log("a new user was created");
      return veryNewUserId;
    },

  });


// Meteor.users.remove('SbkSABKHy4C6QM3qd');
// Meteor.users.remove('zbgW9ZLMA5D7PYHYr');
// Meteor.users.remove('HBk4kvqZgS3XzgwtK');
