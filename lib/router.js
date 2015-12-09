
Router.route('/home/resident', {
  name: "updateResident",
  tempalte: "updateResident"
});
Router.route('/', {
  name: "chooseAHome",
  template: "chooseAHome"
});
Router.route('/home/addResident', {
  name: "addNewResident",
  tempalte: "addNewResident"
});
Router.route('/home/expenses', {
  name: "financeSetup",
  tempalte: "financeSetup"
});
// Router.route('/finances', {
//   name: "finances",
//   template: "finances"
// });
// Router.route('/chores', {
//   name: "chores",
//   template: "chores"
// });
Router.route('userPage', {
  path: '/:_id',
  name: "userPage",
  template: "userPage",
  data: function(){
    return Homes.findOne(this.params._id);
  },
    onBeforeAction: function(){
      Session.set('selectedDocId', this._id);
      //returns undefined
      // console.log(this._id);
      this.next();
            }
});

