module.exports = function iterateThroughObject(reportWithIterator) {
  const last = reportWithIterator.slice(-1);
  let newString = '';

  for (let ele of reportWithIterator) {
    if (ele !== last[0]) {
      ele += ' | ';
    }
    newString += ele;
  }
  return newString;
}
