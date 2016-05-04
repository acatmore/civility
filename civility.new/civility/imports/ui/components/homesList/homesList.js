import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';

import './homesList.html';
import {Homes} from '../../../api/homes/index';
import {name as HomeAdd} from '../homeAdd/homeAdd';
import {name as HomeRemove} from '../homeRemove/homeRemove';
// if (Meteor.isClient) {

	class HomesList {
		constructor($scope, $reactive) {
			'ngInject';
			
			$reactive(this).attach($scope);

			this.subscribe('homes');

			this.helpers({
				homes() {
					return Homes.find({});

				}
			});
		}
	}

	const name = 'homesList';
// }
	//create module
	export default angular.module(name, [
		angularMeteor,
		HomeAdd,
		HomeRemove,
		uiRouter
	]).component(name, {
		templateUrl: `imports/ui/components/${name}/${name}.html`,
		controllerAs: name,
		controller: HomesList
	})
	.config(config);

	function config($stateProvider) {
		'ngInject';

		$stateProvider
			.state('homes', {
				url: '/homes',
				template: '<homes-list></homes-list>'
			});
	}

