const fs = require('fs');

module.exports = function countStudents(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, { encoding: 'utf-8', flag: 'r' }, (error, data) => {
      if (error) {
        return reject(Error('Cannot load the database'));
      }

      let studentCount = 0;
      let CSfieldCount = 0;
      let SWEfieldCount = 0;
      const sweArr = [];
      const csArr = [];
      const students = data.split('\n');

      for (let idx = 1; idx < students.length; idx += 1) {
        if (students[idx].includes('CS')) {
          CSfieldCount += 1;
          csArr.push(students[idx].split(',')[0]);
        } else if (students[idx].includes('SWE')) {
          SWEfieldCount += 1;
          sweArr.push(students[idx].split(',')[0]);
        }
        studentCount += 1;
      }
      console.log(`Number of students: ${studentCount}`);
      const cl = csArr.join(', ');
      const swel = sweArr.join(', ');

      console.log(`Number of students in CS: ${CSfieldCount}. List: ${cl}`);
      console.log(`Number of students in SWE: ${SWEfieldCount}. List: ${swel}`);
      return resolve();
    });
  });
};
