/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!********************!*\
  !*** ./js/main.ts ***!
  \********************/
var director1 = {
    firstName: 'John',
    lastName: 'Doe',
    location: 'London',
    fullTimeEmployee: true,
    numberOfReports: 17,
};
/**
 *
 * @param firstName
 * @param lastName
 * @returns: The first letter of the firstName and the full lastName
 */
function printTeacher(data) {
    var firstLetter = data.firstName[0];
    return "".concat(firstLetter, ". ").concat(data.lastName);
}
var StudentClass = /** @class */ (function () {
    function StudentClass(student) {
        this.firstName = student.firstName;
        this.lastName = student.lastName;
    }
    StudentClass.prototype.workOnHomework = function () {
        return 'Currently working';
    };
    StudentClass.prototype.displayName = function () {
        return "".concat(this.firstName);
    };
    return StudentClass;
}());

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBZUEsSUFBTSxTQUFTLEdBQWM7SUFDM0IsU0FBUyxFQUFFLE1BQU07SUFDakIsUUFBUSxFQUFFLEtBQUs7SUFDZixRQUFRLEVBQUUsUUFBUTtJQUNsQixnQkFBZ0IsRUFBRSxJQUFJO0lBQ3RCLGVBQWUsRUFBRSxFQUFFO0NBQ3BCLENBQUM7QUFRRjs7Ozs7R0FLRztBQUNILFNBQVMsWUFBWSxDQUFDLElBQTBCO0lBQzlDLElBQU0sV0FBVyxHQUFXLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDOUMsT0FBTyxVQUFHLFdBQVcsZUFBSyxJQUFJLENBQUMsUUFBUSxDQUFFLENBQUM7QUFDNUMsQ0FBQztBQWNEO0lBS0Usc0JBQVksT0FBZ0M7UUFDMUMsSUFBSSxDQUFDLFNBQVMsR0FBRyxPQUFPLENBQUMsU0FBUyxDQUFDO1FBQ25DLElBQUksQ0FBQyxRQUFRLEdBQUcsT0FBTyxDQUFDLFFBQVEsQ0FBQztJQUNuQyxDQUFDO0lBRUQscUNBQWMsR0FBZDtRQUNFLE9BQU8sbUJBQW1CLENBQUM7SUFDN0IsQ0FBQztJQUVELGtDQUFXLEdBQVg7UUFDRSxPQUFPLFVBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBRSxDQUFDO0lBQzdCLENBQUM7SUFDSCxtQkFBQztBQUFELENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90eXBlc2NyaXB0X2RlcGVuZGVuY2llcy8uL2pzL21haW4udHMiXSwic291cmNlc0NvbnRlbnQiOlsiLyogdGVhY2hlciBpbnRlcmZhY2UgKi9cbmludGVyZmFjZSBUZWFjaGVyIHtcbiAgcmVhZG9ubHkgZmlyc3ROYW1lOiBzdHJpbmc7XG4gIHJlYWRvbmx5IGxhc3ROYW1lOiBzdHJpbmc7XG4gIGZ1bGxUaW1lRW1wbG95ZWU6IGJvb2xlYW47XG4gIHllYXJzT2ZFeHBlcmllbmNlPzogbnVtYmVyO1xuICBsb2NhdGlvbjogc3RyaW5nO1xuICBjb250cmFjdD86IGJvb2xlYW47XG59XG5cbi8vIGRpcmVjdG9yIGludGVyZmFjZVxuaW50ZXJmYWNlIERpcmVjdG9ycyBleHRlbmRzIFRlYWNoZXIge1xuICBudW1iZXJPZlJlcG9ydHM6IG51bWJlcjtcbn1cblxuY29uc3QgZGlyZWN0b3IxOiBEaXJlY3RvcnMgPSB7XG4gIGZpcnN0TmFtZTogJ0pvaG4nLFxuICBsYXN0TmFtZTogJ0RvZScsXG4gIGxvY2F0aW9uOiAnTG9uZG9uJyxcbiAgZnVsbFRpbWVFbXBsb3llZTogdHJ1ZSxcbiAgbnVtYmVyT2ZSZXBvcnRzOiAxNyxcbn07XG5cbi8vIGludGVyZmFjZSBmb3IgcHJpbnRUZWFjaGVyIGZ1bmN0aW9uXG5pbnRlcmZhY2UgcHJpbnRUZWFjaGVyRnVuY3Rpb24ge1xuICBmaXJzdE5hbWU6IHN0cmluZztcbiAgbGFzdE5hbWU6IHN0cmluZztcbn1cblxuLyoqXG4gKiBcbiAqIEBwYXJhbSBmaXJzdE5hbWUgXG4gKiBAcGFyYW0gbGFzdE5hbWUgXG4gKiBAcmV0dXJuczogVGhlIGZpcnN0IGxldHRlciBvZiB0aGUgZmlyc3ROYW1lIGFuZCB0aGUgZnVsbCBsYXN0TmFtZVxuICovXG5mdW5jdGlvbiBwcmludFRlYWNoZXIoZGF0YTogcHJpbnRUZWFjaGVyRnVuY3Rpb24pIHtcbiAgY29uc3QgZmlyc3RMZXR0ZXI6IHN0cmluZyA9IGRhdGEuZmlyc3ROYW1lWzBdO1xuICByZXR1cm4gYCR7Zmlyc3RMZXR0ZXJ9LiAke2RhdGEubGFzdE5hbWV9YDtcbn1cblxuXG4vLyBEZWNsYXJpbmcgYSBjbGFzcyBhbmQgYW4gaW50ZXJmYWNlXG5pbnRlcmZhY2UgU3R1ZGVudENsYXNzSW50ZXJmYWNlIHtcbiAgd29ya09uSG9tZXdvcmsoKTogc3RyaW5nO1xuICBkaXNwbGF5TmFtZSgpOiBzdHJpbmc7XG59XG5cbmludGVyZmFjZSBTdHVkZW50Q2xhc3NDb25zdHJ1Y3RvciB7XG4gIGZpcnN0TmFtZTogc3RyaW5nO1xuICBsYXN0TmFtZTogc3RyaW5nO1xufVxuXG5jbGFzcyBTdHVkZW50Q2xhc3MgaW1wbGVtZW50cyBTdHVkZW50Q2xhc3NJbnRlcmZhY2Uge1xuXG4gIGZpcnN0TmFtZTogc3RyaW5nO1xuICBsYXN0TmFtZTogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKHN0dWRlbnQ6IFN0dWRlbnRDbGFzc0NvbnN0cnVjdG9yKSB7XG4gICAgdGhpcy5maXJzdE5hbWUgPSBzdHVkZW50LmZpcnN0TmFtZTtcbiAgICB0aGlzLmxhc3ROYW1lID0gc3R1ZGVudC5sYXN0TmFtZTtcbiAgfVxuXG4gIHdvcmtPbkhvbWV3b3JrKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuICdDdXJyZW50bHkgd29ya2luZyc7XG4gIH1cblxuICBkaXNwbGF5TmFtZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiBgJHt0aGlzLmZpcnN0TmFtZX1gO1xuICB9XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=