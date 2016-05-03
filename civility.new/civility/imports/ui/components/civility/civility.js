import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';

import './civility.html';
import {name as HomesList} from '../homesList/homesList';
import {name as Navigation} from '../navigation/navigation';
import {name as HomeDetails} from '../homeDetails/homeDetails';

// if (Meteor.isClient) {

	class Civility {}

	const name = 'civility';
// }
	//create module
	export default angular.module(name, [
		angularMeteor,
		uiRouter,
		HomesList,
		Navigation,
		HomeDetails
	]).component(name, {
		templateUrl: `imports/ui/components/${name}/${name}.html`,
		controllerAs: name,
		controller: Civility
	})
	.config(config);

	function config($locationProvider, $urlRouterProvider) {
		'ngInject';

		$locationProvider.html5Mode(true);

		$urlRouterProvider.otherwise('/homes');
	}


