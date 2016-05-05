import angular from 'angular';
import angularMeteor from 'angular-meteor';
 
import './homesSort.html';
 
class HomesSort {
  constructor() {
    this.changed();
  }
 
  changed() {
    this.onChange({
      sort: {
        [this.property]: parseInt(this.order)
      }
    });
  }
}
 
const name = 'homesSort';
 
// create a module
export default angular.module(name, [
  angularMeteor
]).component(name, {
  templateUrl: `imports/ui/components/${name}/${name}.html`,
  bindings: {
    onChange: '&',
    property: '@',
    order: '@'
  },
  controllerAs: name,
  controller: HomesSort
});