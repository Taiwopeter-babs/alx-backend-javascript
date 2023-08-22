// const countStudents = require('./3-read_file_async');


function countStudents(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, { encoding: 'utf-8', flag: 'r' }, (error, data) => {
      if (error) {
        reject(error);
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

      let outputStr = '';
      outputStr += `Number of students: ${studentCount}\n`;
      const cl = csArr.join(', ');
      const swel = sweArr.join(', ');

      outputStr += `Number of students in CS: ${CSfieldCount}. List: ${cl}`;
      outputStr += `Number of students in SWE: ${SWEfieldCount}. List: ${swel}`;
      resolve(outputStr);
    });
  });
};

countStudents(process.argv[2])
  .then((output) => {
    console.log(output);
  })
  .catch((error) => {
    console.error(error);
  })

// console.log("After!");