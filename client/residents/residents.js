
if (Meteor.isClient) {
    Template.displayResidents.helpers({
      // console.log(ResidentList.find());
      residents: function() {
        // return false;
        return ResidentList.find();
      }
    });

    Template.addNewResident.events({
      "submit .new-resident": function (event) {
        //prevent default browser form
        event.preventDefault();
        var userName = event.target.userName.value;
        var firstName = event.target.firstName.value;
        var lastName = event.target.lastName.value;
        var currentUserId = Meteor.userId();

        ResidentList.insert({
          user: userName,
          first: firstName,
          last: lastName,
          createdAt: new Date(),            // current time
          createdBy: currentUserId,           // _id of logged in user
          ownerUserName: currentUserId.username  // username of logged in user
        });
        event.target.userName.value = "";
        event.target.firstName.value = "";
        event.target.lastName.value = "";
        // console.log(ResidentList.find());
      }
    });

        Template.resident.events({
    "click .toggle-checked": function () {

      // Set the checked property to the opposite of its current value
      ResidentList.update(this._id, {
        $set: {checked: ! this.checked}
      });

    },
    "click .delete": function () {
      ResidentList.remove(this._id);
      console.log("delete clicked");
    }
  });
}

// butts