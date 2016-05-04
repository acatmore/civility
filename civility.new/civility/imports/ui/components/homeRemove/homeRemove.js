import angular from 'angular';
import angularMeteor from 'angular-meteor';

import {Meteor} from 'meteor/meteor';
 
import './homeRemove.html';
import {homes} from '../../../api/homes/index';
 
class HomeRemove {
  remove() {
    if (this.home) {
      this.home.owner = Meteor.user()._id;
    	Homes.remove(this.home._id);
    }
  }
}
 
const name = 'homeRemove';
 
// create a module
export default angular.module(name, [
  angularMeteor
]).component(name, {
  templateUrl: `imports/ui/components/${name}/${name}.html`,
  bindings: {
  	home: '<'
  },
  controllerAs: name,
  controller: HomeRemove
})