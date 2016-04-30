

  Template.financeSetup.events({
 
    "submit .new-expense": function (event, target) {
      event.preventDefault();

      var homeId = this._id;
      var e = document.getElementById("mySelect");
      var type = e.options[e.selectedIndex].value;
      var expense = parseInt(event.target.newExpenses.value);
      var owner = Meteor.userId();

      Finances.insert({
        homeId: homeId,
        userId: owner,
        amount: expense,
        type: type
      });
      event.target.newExpenses.value = "";

    }
  });


