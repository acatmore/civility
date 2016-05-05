import angular from 'angular';
 
const name = 'uninvitedFilter';
 
function UninvitedFilter(users, home) {
  if (!home) {
    return false;
  }
 
  return users.filter((user) => {
    // if not the owner and not invited
    return user._id !== home.owner && (home.invited || []).indexOf(user._id) === -1;
  });
}
 
// create a module
export default angular.module(name, [])
  .filter(name, () => {
    return UninvitedFilter;
  });