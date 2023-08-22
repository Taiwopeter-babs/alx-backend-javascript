const readDatabase = require('../utils');

class StudentsController {
  static getAllStudents(request, response) {
    const outputResponse = [];
    return readDatabase(process.argv.slice(-1).toString())
      .then((students) => {
        outputResponse.push('This is the list of our students');

        const keys = Object.keys(students);
        keys.sort();

        for (let i = 0; i < keys.length; i += 1) {
          outputResponse.push(`Number of students in ${keys[i]}: ${students[keys[i]].length}. List: ${students[keys[i]].join(', ')}`);
        }
        return response.status(200).send(outputResponse.join('\n'));
      })
      .catch(() => response.status(500).send('Cannot load the database'));
  }

  static getAllStudentsByMajor(request, response) {
    const studentsMajor = request.params.major;

    return readDatabase(process.argv.slice(-1).toString())
      .then((students) => {
        if (!(studentsMajor in students)) {
          return response.status(500).send('Major parameter must be CS or SWE');
        }
        const studentsList = students[studentsMajor];
        return response.status(200).send(`List: ${studentsList.join(', ')}`);
      })
      .catch(() => response.status(500).send('Cannot load the database'));
  }
}

module.exports = StudentsController;
