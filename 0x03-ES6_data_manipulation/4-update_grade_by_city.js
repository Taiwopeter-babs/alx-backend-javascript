export default function updateStudentGradeByCity(studentArray, city, newGrades) {
  const newGradesOfStudents = studentArray.filter((student) => student.location === city)
    .map(student => {
      let found = newGrades.find(element => element.studentId === student.id);
      let grade = found ? found.grade : 'N/A';
      student.grade = grade;
      return student;
    });
  return newGradesOfStudents;
}
