const fs = require('fs');

module.exports = function readDatabase(filePath) {
  const studentsObj = {};
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, { encoding: 'utf-8', flag: 'r' }, (error, data) => {
      if (error) {
        reject(error);
      }

      const sweArr = [];
      const csArr = [];
      const students = data.split('\n');

      for (let idx = 1; idx < students.length; idx += 1) {
        if (students[idx].includes('CS')) {
          csArr.push(students[idx].split(',')[0]);
        } else if (students[idx].includes('SWE')) {
          sweArr.push(students[idx].split(',')[0]);
        }
      }
      studentsObj.SWE = sweArr;
      studentsObj.CS = csArr;

      resolve(studentsObj);
    });
  });
};
