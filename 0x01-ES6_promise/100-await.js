const { uploadPhoto, createUser } = require('./utils');

module.exports = async function asyncUploadUser() {
  const response = {};

  await Promise.all([uploadPhoto(), createUser()])
    .then((values) => {
      [response.photo, response.user] = values;
    })
    .catch(() => { [response.photo, response.user] = [null, null]; });
  return response;
};
