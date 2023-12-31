const signUpUser = require('./4-user-promise');
const uploadPhoto = require('./5-photo-reject');

module.exports = async function handleProfileSignup(firstName, lastName, filename) {
  return Promise.allSettled([signUpUser(firstName, lastName), uploadPhoto(filename)])
    .then((values) => {
      const results = [];
      values.forEach((res) => results.push({
        status: res.status,
        value: res.status === 'fulfilled' ? res.value : `Error: ${res.reason}`,
      }));
      return results;
    });
};
