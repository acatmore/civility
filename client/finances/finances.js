

  Template.financeSetup.events({
 
    "submit .new-expense": function (event, target) {
      event.preventDefault();
      console.log('reload');
      // var homeId = this._id;
      // var e = document.getElementById("mySelect");
      // var type = e.options[e.selectedIndex].value;
      // var expense = event.target.newExpenses.value;
      // var owner = Meteor.userId();

      // Finances.insert({
      //   homeId: homeId,
      //   userId: owner,
      //   amount: expense,
      //   type: type
      //   // frequency
      // })

      // event.target.newExpenses.value = "";
    }
  })
