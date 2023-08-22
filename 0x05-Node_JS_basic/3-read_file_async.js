const fs = require('fs');

module.exports = function countStudents(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, { encoding: 'utf-8', flag: 'r' }, (error, data) => {
      if (error) {
        throw new Error('Cannot load the database');
      }

      let studentCount = 0;
      let CSfieldCount = 0;
      let SWEfieldCount = 0;
      const sweArr = [];
      const csArr = [];
      const students = data.split('\n');

      for (let idx = 1; idx < students.length; idx++) {
        if (students[idx].includes('CS')) {
          CSfieldCount++;
          csArr.push(students[idx].split(',')[0]);
        } else if (students[idx].includes('SWE')) {
          SWEfieldCount++;
          sweArr.push(students[idx].split(',')[0]);
        }
        studentCount++;
      }
      console.log(`Number of students: ${studentCount}`);
      const cl = csArr.join(', ');
      const swel = sweArr.join(', ');

      console.log(`Number of students in CS: ${CSfieldCount}. List: ${cl}`);
      console.log(`Number of students in SWE: ${SWEfieldCount}. List: ${swel}`);
      resolve();
    });
  });
};
