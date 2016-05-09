import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';
import utilsPagination from 'angular-utils-pagination';

import {Counts} from 'meteor/tmeasday:publish-counts';

import './homesList.html';
import {Homes} from '../../../api/homes/index';
import {name as HomesSort} from '../homesSort/homesSort';
import {name as HomeAdd} from '../homeAdd/homeAdd';
import {name as HomeRemove} from '../homeRemove/homeRemove';
import {name as HomeCreator} from '../homeCreator/homeCreator';
// import {name as homeMove} from '../homeMove/homeMove';
// import {name as ResidentList} from '../residentList/residentList';
// if (Meteor.isClient) {

	class HomesList {
		constructor($scope, $reactive) {
			'ngInject';
			
			$reactive(this).attach($scope);
			this.perPage = 5;
			this.page = 1;
			this.sort = {
				name: 1
			};
			this.searchText = '';

			this.subscribe('homes', () => [{
				limit: parseInt(this.perPage),
				skip: parseInt((this.getReactiviley('page') -1) * this.perPage),
				sort: this.getReactiviley('sort')
				}, this.getReactiviley('searchText')
				]);

			this.helpers({
				homes() {
					return Homes.find({}, {
						sort: this.getReactiviley('sort')
					});
				},
				homesCount() {
					return Counts.get('numerOfHomes');
				}
			});
		}
		pageChanged(newPage) {
			this.page = newPage;
		}

		sortChanged(sort) {
			this.sort = sort;
		}
	}

	const name = 'homesList';
// }
	//create module
	export default angular.module(name, [
		angularMeteor,
		HomeAdd,
		HomeRemove,
		uiRouter,
		utilsPagination,
		HomesSort,
		HomeCreator,
		// HomeMove,
		// ResidentList
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

