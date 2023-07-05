/* student interface */
interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: 'Taiwo',
  lastName: 'Peter',
  age: 14,
  location: 'Lagos'
}

const student2: Student = {
  firstName: 'Tee',
  lastName: 'Pete',
  age: 15,
  location: 'Cairo'
}
/* array of student */
const studentList: Array<Student> = [student1, student2];

// get the name and location
const [firstName, , , loc] = Object.keys(studentList[0]);

// console.log(firstName, loc);

/* get table */
const table = document.getElementById('student-table');

const headerRow = [firstName, loc].map((header) => {
  return `<th>${header}</th>`;
});

table.querySelector('thead').innerHTML = headerRow.join('');

const rows = studentList.map((student) => {
  return `
    <tr>
      <td>${student.firstName}</td>
      <td>${student.location}</td>
    </tr>
  `
});

table.innerHTML = rows.join('');
