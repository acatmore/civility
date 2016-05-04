import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';

import {Meteor} from 'meteor/meteor';
 
import './homeDetails.html';
 
class HomeDetails {
  constructor($stateParams, $scope, $reactive) {
    'ngInject';

    $reactive(this).attach($scope);
    
    this.homeId = $stateParams.homeId;

    this.helpers({
    	home() {
    		return Homes.findOne({
    			_id: $stateParams.homeId
    		});
    	}
    });
  }

  save() {
  	Homes.update({
  		_id: this.home._id
  	}, {
  		$set: {
  			name: this.home.name,
  			description: this.home.description
  		}
  	}, (error) => {
  		if (error) {
  			console.log('unable to update home');
  		} else {
  			console.log('Done!')
  		}
  	});
  }
}
 
const name = 'homeDetails';
 
// create a module
export default angular.module(name, [
  angularMeteor,
  uiRouter
]).component(name, {
  templateUrl: `imports/ui/components/${name}/${name}.html`,
  controllerAs: name,
  controller: HomeDetails
})
.config(config);

function config($stateProvider) {
	'ngInject';

	$stateProvider.state('homeDetails', {
		url: '/homes/:homeId',
		template: '<home-details></home-details>',
    resolve: {
      currentUser($q) {
        if (Meteor.userId() === null) {
          return $q.reject('AUTH_REQUIRED');
        } else {
          return $q.resolve();
        }
      }
    }
	});
}