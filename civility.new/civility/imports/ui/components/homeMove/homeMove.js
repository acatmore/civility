import angular from 'angular';
import angularMeteor from 'angular-meteor';
 
import { Meteor } from 'meteor/meteor';
 
import './homeMove.html';
 
class HomeMove {
  yes() {
    this.answer('yes');
  }
  no() {
    this.answer('no');
  }
 
  answer(answer) {
    Meteor.call('move', this.home._id, answer, (error) => {
      if (error) {
        console.error('Oops, unable to move!');
      } else {
        console.log('move done!')
      }
    });
  }
}
 
const name = 'homeMove';
 
// create a module
export default angular.module(name, [
  angularMeteor
]).component(name, {
  templateUrl: `imports/ui/components/${name}/${name}.html`,
  controllerAs: name,
  bindings: {
    home: '<'
  },
  controller: HomeMove
});