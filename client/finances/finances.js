

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

// Template.oldChart.helpers({
//   $(function(){
//     $(".chart li").hover(function(){
//         $(this).addClass("hover");
//         $('.output li')
//         .css('visibility', 'hidden')//Hide all the li's
//         .eq($(this).index())//Get the li at same index which triggered hover
//         .css('visibility', 'visible');//Make it visible
//     }, function(){
//         $(this).removeClass("hover");
//         $('.output li').css('visibility', 'hidden');
//     });


