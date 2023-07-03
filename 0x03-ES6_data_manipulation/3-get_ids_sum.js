export default function getStudentIdsSum(studentArray) {
  const idArray = studentArray.map((obj) => obj.id);
  const sumOfIds = idArray.reduce((id, currentId) => id + currentId);
  return sumOfIds;
}
