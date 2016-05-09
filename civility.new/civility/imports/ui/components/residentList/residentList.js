import angular from 'angular';
import angularMeteor from 'angular-meteor';
 
import './residentList.html';
 
class residentList { }
 
const name = 'residentList';
 
// create a module
export default angular.module(name, [
  angularMeteor
]).component(name, {
  templateUrl: `imports/ui/components/${name}/${name}.html`,
  controllerAs: name,
  bindings: {
    resident: '<'
  },
  controller: ResidentList
});