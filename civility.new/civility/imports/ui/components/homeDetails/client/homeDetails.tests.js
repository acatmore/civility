import { name as PartyDetails } from '../homeDetails';
import { Homes } from '../../../../api/Homes';
import 'angular-mocks';
 
describe('HomeDetails', () => {
  beforeEach(() => {
    window.module(HomeDetails);
  });
 
  describe('controller', () => {
    let controller;
    const home = {
      _id: 'homeId',
      name: 'Foo',
      description: 'Birthday of Foo',
      public: true
    };
 
    beforeEach(() => {
      inject(($rootScope, $componentController) => {
        controller = $componentController(HomeDetails, {
          $scope: $rootScope.$new(true)
        });
      });
    });
 
    describe('save()', () => {
      beforeEach(() => {
        spyOn(Homes, 'update');
        controller.home = home;
        controller.save();
      });
 
      it('should update a proper home', () => {
        expect(Homes.update.calls.mostRecent().args[0]).toEqual({
          _id: home._id
        });
      });
 
      it('should update with proper modifier', () => {
        expect(Homes.update.calls.mostRecent().args[1]).toEqual({
          $set: {
            name: home.name,
            description: home.description,
            public: home.public
          }
        });
      });
    });
  });
});