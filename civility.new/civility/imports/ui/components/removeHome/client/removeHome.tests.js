import { name as HomeRemove } from '../homeRemove';
import { Homes } from '../../../../api/homes';
import 'angular-mocks';
 
describe('HomeRemove', () => {
  beforeEach(() => {
    window.module(HomeRemove);
  });
 
  describe('controller', () => {
    let controller;
    const home = {
      _id: 'homeId'
    };
 
    beforeEach(() => {
      inject(($rootScope, $componentController) => {
        controller = $componentController(HomeRemove, {
          $scope: $rootScope.$new(true)
        }, {
          home
        });
      });
    });
 
    describe('remove()', () => {
      beforeEach(() => {
        spyOn(Homes, 'remove');
        controller.remove();
      });
 
      it('should remove a home', () => {
        expect(Homes.remove).toHaveBeenCalledWith(home._id);
      });
    });
  });
});