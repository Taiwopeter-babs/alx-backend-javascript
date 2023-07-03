export default function getStudentsByLocation(studentArray, city) {
  const studentByCity = studentArray.filter((obj) => obj.location === city);
  return studentByCity;
}
