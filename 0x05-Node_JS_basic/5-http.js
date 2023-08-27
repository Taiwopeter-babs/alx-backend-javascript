const http = require('http');
const fs = require('fs');

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

const requestListener = (req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  switch (req.url) {
    case '/':
      res.write('Hello Holberton School!');
      res.end();
      break;
    case '/students':
      res.write('This is the list of our students\n');
      countStudents(process.argv.slice(-1).toString())
        .then((outputStr) => {
          res.end(outputStr);
        })
        .catch(() => {
          res.statusCode = 404;
          res.end('Cannot load the database');
        });
      break;

    default:
      res.statusCode = 404;
      res.end('Not Found');
      break;
  }
};

const [port, host] = [1245, 'localhost'];
const app = http.createServer(requestListener);

app.listen(port, host, () => {
  console.log('Server is listening');
});

module.exports = app;
