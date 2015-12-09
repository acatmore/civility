
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

