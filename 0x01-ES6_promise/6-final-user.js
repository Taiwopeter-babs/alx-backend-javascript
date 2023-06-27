const signUpUser = require('./4-user-promise');
const uploadPhoto = require('./5-photo-reject');

module.exports = function handleProfileSignup(firstName, lastName, filename) {

  return Promise.all([signUpUser(firstName, lastName), uploadPhoto(filename)])
    .then((values) => console.log(values))
}
