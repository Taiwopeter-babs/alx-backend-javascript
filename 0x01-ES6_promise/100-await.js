const { uploadPhoto, createUser } = require('./utils');

module.exports = async function asyncUploadUser() {
  const response = {};

  await Promise.all([uploadPhoto(), createUser()])
    .then((values) => {
      [response.photo, response.user] = values;
    })
    .catch(() => { [response.photo, response.user] = [null, null]; });
  return response;

  // try {
  //   [response.photo, response.user] = await Promise.all([uploadPhoto(), createUser()]);
  //   return response;
  // } catch (error) {
  //   [response.photo, response.user] = [null, null];
  //   return response;
  // }
};
