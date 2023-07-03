export default function getListStudentIds(arrayOfObjects) {
  if (!Array.isArray(arrayOfObjects)) {
    return [];
  }
  const idArray = arrayOfObjects.map((obj) => obj.id);
  return idArray;
}
