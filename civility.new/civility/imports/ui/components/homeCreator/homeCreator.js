import angular from 'angular';
import angularMeteor from 'angular-meteor';
 
import { Meteor } from 'meteor/meteor';
 
import './homeCreator.html';
import { name as DisplayNameFilter } from '../../filters/displayNameFilter';
 
/**
 * HomeCreator component
 */
class HomeCreator {
  constructor($scope) {
    'ngInject';
 
    $scope.viewModel(this);
 
    this.helpers({
      creator() {
        if (!this.home) {
          return '';
        }
 
        const owner = this.home.owner;
 
        if (Meteor.userId() !== null && owner === Meteor.userId()) {
          return 'me';
        }
 
        return Meteor.users.findOne(owner) || 'nobody';
      }
    });
  }
}
 
const name = 'homeCreator';
 
// create a module
export default angular.module(name, [
  angularMeteor,
  DisplayNameFilter
]).component(name, {
  templateUrl: `imports/ui/components/${name}/${name}.html`,
  controllerAs: name,
  bindings: {
    home: '<'
  },
  controller: HomeCreator
});