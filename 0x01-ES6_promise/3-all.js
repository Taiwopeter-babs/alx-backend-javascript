const uploadPhoto = require('./utils').uploadPhoto;
const createUser = require('./utils').createUser;

module.exports = function handleProfileSignup() {
  return Promise.all([uploadPhoto(), createUser()])
    .then((values) => {
      const [value1, value2] = values;
      console.log(`${value1.body} ${value2.firstName} ${value2.lastName}`);
    })
    .catch(() => console.log('Signup system offline'));
};
