import angular from 'angular';
import angularMeteor from 'angular-meteor';

angular.module('civility', [
	'angular-Meteor'
]);
.controller('NavigationCtrl', function($scope) {
	'ngInject';

	$scope.pages = [{
		'name': 'Home',
		'URL': '"/"'
	}, {
		'name': 'Home List',
		'URL': '"/home-list"'
	}, {
		'name': 'Support',
		'URL': '"/support"'
	}];
});

.controller('HomesListCtrl', function($scope) {
	'ngInject';
	$scope.homes = [{
		'name': 'Nerd Cave',
		'description': 'a rickity shack lit by computer glow alone'
	},	{
		'name': 'Bro Pad',
		'description': 'beer-can littered lawn and shirtless men are a beacon to all who wish to party'
	}, {
		'name': 'Young Professional Apartment',
		'description': 'the cleanliness and unified asthetic proclaim "there be adults here"'
	}];
});