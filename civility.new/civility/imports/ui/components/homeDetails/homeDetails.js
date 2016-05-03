import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';
 
import './homeDetails.html';
 
class HomeDetails {
  constructor($stateParams) {
    'ngInject';
    
    this.homeId = $stateParams.homeId;
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
		url: '/homes/homeId',
		template: '<home-details></home-details>'
	});
}