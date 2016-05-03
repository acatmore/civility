import angular from 'angular';
import angularMeteor from 'angular-meteor';

import './civility.html';
import {name as HomesList} from '../homesList/homesList';

// if (Meteor.isClient) {

	class Civility {}

	const name = 'civility';
// }
	//create module
	export default angular.module(name, [
		angularMeteor,
		HomesList
	]).component(name, {
		templateUrl: `imports/ui/components/${name}/${name}.html`,
		controllerAs: name,
		controller: Civility
	});

