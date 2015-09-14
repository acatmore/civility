// Expenses = new Mongo.Collection("expenses");

if (Meteor.isClient) {

 Template.chooseAHome.helpers({
    // console.log(Homes.find());
    homes: function () {
      // var homeId = this._id;
      // if (Homes.find({selectedHome: homeId})) {
      //   return Homes.find(selectedHome);
      // } else {
        // return false;
        return Homes.find();
      //}
    }

  });

 // Template.addNewHome.helpers({
 //    residents: function() {
 //      // console.log($('[name=residents]:checked').val());
 //      return $('[name=residents]:checked').val();
 //    }
 // });


  Template.chooseAHome.events({
    "submit .new-home": function (event) {
      // Prevent default browser form submit
      event.preventDefault();
 
      // Get value from form element
      var addressInput = event.target.address.value;
      var rentTotalInput = event.target.rent.value;
      var residentsInput = $('[name=residents]:checked').val();
      var homeNameInput = event.target.homeName.value;

 
      // Insert a home into the collection
      Homes.insert({
        homeName: homeNameInput,
        address: addressInput,
        rentTotal: rentTotalInput,
        residentNumber: residentsInput,
        createdAt: new Date(), // current time
        owner: Meteor.userId(), // _id of logged in user
      });
      // Clear form
      event.target.address.value = "";
      event.target.rent.value = "";
      event.target.homeName.value="";
      // console.log(Homes.find());
    }

  });

    Template.home.events({
    "click .toggle-checked": function () {
      // var homeId = this._id;
      // var selectedHome = Session.get('selectedHome');

      // Session.set('selectedHome', homeId);

      // Set the checked property to the opposite of its current value
      Homes.update(this._id, {
        $set: {checked: ! this.checked}
      });

      // Homes.update(selectedHome, {
      //   $set: {selectedHome: 'homeId'}
      //   // console.log(Homes.find(selectedHome));
      // });
      // Homes.update(this._id, {
      //   $set: {selectedHome: this.checked}
        // console.log(selectedHome)
      //use this check box to hide other homes/"select" this as current Home for users to join
      // });
    },
    "click .delete": function () {
      Homes.remove(this._id);
      console.log("delete clicked");
    }
  });

          Accounts.ui.config({
    passwordSignupFields: "USERNAME_ONLY"
  });

}
