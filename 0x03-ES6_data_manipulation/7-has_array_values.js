export default function hasValuesFromArray(set, array) {
  for (const elem of new Set(array)) {
    if (!set.has(elem)) {
      return false;
    }
  }
  return true;
}
