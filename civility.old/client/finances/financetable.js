// TabularTables = {};

// Meteor.isClient && Template.registerHelper('TabularTables', TabularTables);

// TabularTables.Finances = new Tabular.Table({
//   name: "Financelist",
//   collection: Finances,
//   columns: [
//     {data: "title", title: "Title"},
//     {data: "author", title: "Author"},
//     {data: "copies", title: "Copies Available"},
//     {
//       data: "lastCheckedOut",
//       title: "Last Checkout",
//       render: function (val, type, doc) {
//         if (val instanceof Date) {
//           return moment(val).calendar();
//         } else {
//           return "Never";
//         }
//       }
//     },
//     {data: "summary", title: "Summary"},
//     {
//       tmpl: Meteor.isClient && Template.bookCheckOutCell
//     }
//   ]
// });