import angular from 'angular';
import angularMeteor from 'angular-meteor';

import './homesList.html';
import {Homes} from '../../../api/homes';
import {name as HomeAdd} from '../homeAdd/homeAdd';
import {name as HomeRemove} from '../homeRemove/homeRemove';
// if (Meteor.isClient) {

	class HomesList {
		constructor($scope, $reactive) {
			'ngInject';
			
			$reactive(this).attach($scope);

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
		HomeRemove
	]).component(name, {
		templateUrl: `imports/ui/components/${name}/${name}.html`,
		controllerAs: name,
		controller: HomesList
	});

