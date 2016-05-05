import angular from 'angular';
import _ from 'underscore';
 
const name = 'uninvitedFilter';
 
function UninvitedFilter(users, home) {
  if (!home) {
    return false;
  }
 
  return users.filter((user) => {
    // if not the owner and not invited
    return user._id !== party.owner && !_.contains(home.invited, user._id);
  });
}
 
// create a module
export default angular.module(name, [])
  .filter(name, () => {
    return UninvitedFilter;
  });