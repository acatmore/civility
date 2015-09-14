// Users = new Mongo.Collection("users");
// Expenses = new Mongo.Collection("expenses");

// if (Meteor isClient) {
//     Template.userSetUp.helpers ({
//       users: function () {
//         return Users.find();
//       }
//     });

//     Template.userSetUp.events({

//     "submit .new-task": function (event) {
//       // Prevent default browser form submit
//       event.preventDefault();
 
//       // Get value from form element
//       var userName = event.target.text.value;
//       console.log(event.target);

//       Users.insert ({
//       name = userName,

//       })
//       event.target.text.value = "";
//     }

//   });

//     Template.expenseSetUp.events({

//     "submit .new-task": function (event) {
//       // Prevent default browser form submit
//       event.preventDefault();
 
//       // Get value from form element
//       var expenseName = event.target.text.value;
//       console.log(event.target);

//       Expenses.insert ({
//       name = expenseName,

//       })
//       event.target.text.value = "";
//     }

//   });
// }