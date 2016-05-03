import { name as HomeAdd } from '../homeAdd';
import { Homes } from '../../../../api/homes';
import 'angular-mocks';
 
describe('homeAdd', () => {
  beforeEach(() => {
    window.module(HomeAdd);
  });
 
  describe('controller', () => {
    let controller;
    const home = {
      name: 'Foo',
      description: 'Birthday of Foo'
    };
 
    beforeEach(() => {
      inject(($rootScope, $componentController) => {
        controller = $componentController(HomeAdd, {
          $scope: $rootScope.$new(true)
        });
      });
    });
 
    describe('reset()', () => {
      it('should clean up home object', () => {
        controller.home = home;
        controller.reset();
 
        expect(controller.home).toEqual({});
      });
    });
 
    describe('submit()', () => {
      beforeEach(() => {
        spyOn(Homes, 'insert');
        spyOn(controller, 'reset').and.callThrough();
 
        controller.home = home;
 
        controller.submit();
      });
 
      it('should insert a new home', () => {
        expect(Homes.insert).toHaveBeenCalledWith(home);
      });
 
      it('should call reset()', () => {
        expect(controller.reset).toHaveBeenCalled();
      });
    });
  });
});