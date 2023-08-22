const express = require('express');
const fs = require('fs');

const app = express();

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

      let outputStr = '';
      outputStr += `Number of students: ${studentCount}\n`;
      const cl = csArr.join(', ');
      const swel = sweArr.join(', ');

      outputStr += `Number of students in CS: ${CSfieldCount}. List: ${cl}\n`;
      outputStr += `Number of students in SWE: ${SWEfieldCount}. List: ${swel}`;
      resolve(outputStr);
    });
  });
}
const port = 1245;

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', async (req, res) => {
  try {
    const outResult = await countStudents(process.argv.slice(-1).toString());
    res.send(`This is the list of our students\n${outResult}`);
  } catch (error) {
    res.send('Cannot load the database');
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

module.exports = app;
