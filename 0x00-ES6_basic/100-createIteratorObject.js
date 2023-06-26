module.exports = function createIteratorObject(report) {
  const array = [];

  for (const prop in report.allEmployees) {
    if (Object.hasOwn(report.allEmployees, prop)) {
      array.push(...report.allEmployees[prop]);
    }
  }
  return array;
};
