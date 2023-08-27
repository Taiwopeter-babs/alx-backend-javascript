const countStudents = require('./3-read_file_async');

countStudents('database.csv')
  .then(() => {
    console.log('done');
  })
  .catch((error) => {
    console.error(error);
  });

console.log('After!');
