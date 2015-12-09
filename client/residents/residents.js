 
if (Meteor.isClient) {

  if(Meteor.user()) {
    Meteor.subscribe('myuser');
}

    Template.displayResidents.helpers({
      residents: function() {
        //ADD limitation for only this.id
        console.log(Meteor.users.find().fetch());
        return Meteor.users.find().fetch();
      }
    });

    Template.displayFinances.helpers({
      expenses: function() {
        return Finances.find();
      }
    })

    Template.updateResident.events({
      "submit .update-resident-name": function (event) {
        //prevent default browser form
        event.preventDefault();
        var user = Meteor.userId();
        var newName = event.target.name.value;
        Meteor.users.update({_id: user}, {$set: {"profile.name": newName}});

        event.target.name.value = "";
      },
      "submit .update-resident-rent": function (event) {
        //prevent default browser form
        event.preventDefault();
        var user = Meteor.userId();
        var newRent = event.target.rentPayment.value;
        Meteor.users.update({_id: user}, {$set: {"profile.rentPayment": newRent}});

        event.target.rentPayment.value = "";
      },
      "submit .update-resident-email": function (event) {
        //prevent default browser form
        event.preventDefault();
        var user = Meteor.userId();
        var newEmail = event.target.email.value;
        Meteor.users.update({_id: user}, {$set: {"email": newEmail}});

        event.target.email.value = "";
      }
    });

    Template.addNewResident.events({
      "submit .new-resident": function (event) {
        //prevent default browser form
        event.preventDefault();
        var homeId = this._id;
        var currentUserId = Meteor.userId();
        var details = {
          email: event.target.email.value,
          // home: this._id,
          name: event.target.firstName.value,
          rentPayment: parseInt(event.target.rentFraction.value)
        };
        Meteor.call('addUser', details, function(err, newUserId) {
          if (err) {
            console.error(err);
            return;
          }

          Homes.update(
            {_id: homeId}, 
            {$addToSet: {residentArray: newUserId}}
          );
        });
        event.target.email.value = "";
        event.target.firstName.value = "";
        event.target.rentFraction.value = "";

      },
      "submit .delete-resident": function(event) {
        event.preventDefault();
        var homeId = this._id;
        var deleteThis = event.target.deleteID.value;
        Homes.update({_id: homeId}, {$pull: {residentArray: deleteThis}
        })
        //not working
        event.target.deleteID.value = "";
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
