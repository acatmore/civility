import angular from 'angular';
import angularMeteor from 'angular-meteor';
import 'bootstrap/dist/css/bootstrap.css';

import {Meteor} from 'meteor/meteor';

import {name as Civility} from '../imports/ui/components/civility/civility';

function onReady() {
  angular.bootstrap(document, [
    Civility
  ], {
    strictDi: true
  });
}
 
if (Meteor.isCordova) {
  angular.element(document).on('deviceready', onReady);
} else {
  angular.element(document).ready(onReady);
}
