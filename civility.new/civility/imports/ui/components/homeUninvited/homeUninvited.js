import angular from 'angular';
import angularMeteor from 'angular-meteor';
 
import { Meteor } from 'meteor/meteor';
 
import './homeUninvited.html';
import { name as UninvitedFilter } from '../../filters/uninvitedFilter';
import { name as DisplayNameFilter } from '../../filters/displayNameFilter';
 
class HomeUninvited {
  constructor($scope) {
    'ngInject';
 
    $scope.viewModel(this);
 
    this.helpers({
      users() {
        return Meteor.users.find({});
      }
    });
  }

  invite(user) {
  Meteor.call('invite', this.home._id, user._id,
    (error) => {
      if (error) {
        console.log('Oops, unable to invite');
      } else {
        console.log('Invited!');
      }
    });
  }

}

const name = 'homeUninvited';
 
// create a module
export default angular.module(name, [
  angularMeteor,
  UninvitedFilter,
  DisplayNameFilter
]).component(name, {
  templateUrl: `imports/ui/components/${name}/${name}.html`,
  controllerAs: name,
  bindings: {
    home: '<'
  },
  controller: HomeUninvited
});