module.exports = function createEmployeesObject(departmentName, employees) {
  const object = {
    [departmentName]: employees,
  };
  return object;
};
