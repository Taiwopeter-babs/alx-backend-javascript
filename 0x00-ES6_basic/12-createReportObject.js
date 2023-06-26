module.exports = function createReportObject(employeesList) {
  const reportObject = {
    allEmployees: employeesList,

    getNumberOfDepartments(employeesList) {
      return Object.entries(employeesList).length;
    },
  };
  return reportObject;
};
