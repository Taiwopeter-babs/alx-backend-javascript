export default function cleanSet(set, startString) {

  const lengthStr = startString.length;
  if (!lengthStr) {
    return '';
  }

  const filterString = [...set].filter((elem) => elem.startsWith(startString))
    .map((elem) => elem.slice(lengthStr)).join('-');
  return filterString;
}
