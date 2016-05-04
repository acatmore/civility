import angular from 'angular';
import angularMeteor from 'angular-meteor';
 
import './homeAdd.html';
import {Homes} from '../../../api/homes';
 
class HomeAdd {
	constructor() {
		this.home = {};
	}

	submit() {
		Homes.insert(this.home);
		this.reset();
	}

	reset() {
		this.home = {};
	}
}
 
const name = 'homeAdd';
 
// create a module
export default angular.module(name, [
  angularMeteor
]).component(name, {
  templateUrl: `imports/ui/components/${name}/${name}.html`,
  controllerAs: name,
  controller: HomeAdd
});