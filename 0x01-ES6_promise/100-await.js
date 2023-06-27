const { uploadPhoto } = require('./utils');
const { createUser } = require('./utils');

module.exports = async function asyncUploadUser() {

  const response = {};

  try {
    [response.photo, response.user] = await Promise.all([uploadPhoto(), createUser()]);
    return response;

  } catch (error) {
    [response.photo, response.user] = [null, null];
    return response;
  }
}
