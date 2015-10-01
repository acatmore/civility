// Expenses = new Mongo.Collection("expenses");

if (Meteor.isClient) {

 Template.chooseAHome.helpers({
    // console.log(Homes.find());
    homes: function () {
        return Homes.find();
      //}
    }

  });

Template.oldChart.helpers({
  findExpenses: function(userId) {
  return Finances.find({userId: userId})
  },
  findTotalExpense: function(total) {
    return Finances.findOne({totalArray: total})
  }
});

  Template.userPage.helpers({
      residents: function() {
      var home = Homes.findOne({_id: this._id});
      var residentArray = home.residentArray;
      return Meteor.users.find({_id: {$in: residentArray}})

      },
      expense: function() {
      var currentUser = Meteor.userId();
      return Finances.find({userId: currentUser})

      },
      editingDoc: function(){
      return Homes.findOne({_id: Session.get('selectedDocId')});
      }

  });

  Template.chooseAHome.events({
    "submit .new-home": function (event, target) {
      // Prevent default browser form submit
      event.preventDefault();
      console.log(target);
      // Get value from form element
      var addressInput = event.target.address.value;
      var rentTotalInput = parseInt(event.target.rent.value);
      var homeNameInput = event.target.homeName.value;
      var residentId = [Meteor.userId()] //logged in user that creates home is made first resident by default
 
      // Insert a home into the collection
      Homes.insert({
        homeName: homeNameInput,
        address: addressInput,
        rentTotal: rentTotalInput,
        residentArray: residentId, //array of user ids
        createdAt: new Date(), // current time
        owner: Meteor.userId() // _id of logged in user
      });
      // Clear form
      event.target.address.value = "";
      event.target.rent.value = "";
      event.target.homeName.value="";
      // console.log(Homes.find());
    },

    "submit .move-in": function (event) {
      //prevent default browser form submit
      event.preventDefault();
      // var homeSelected = Homes.find(this._id);
      // Session.set("selectedHome", this._id);
      var thisId = this._id;
      Homes.update({
        _id: thisId
      });
      Router.go('userPage', {_id: this._id});
   
    }

  });

    Template.home.events({
    "click .toggle-checked": function () {

      // Set the checked property to the opposite of its current value
      Homes.update(this._id, {
        $set: {checked: ! this.checked}
      });

    },
    "click .delete": function () {
      Homes.remove(this._id);
      console.log("delete clicked");
    }
  });

}
