/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!********************!*\
  !*** ./js/main.ts ***!
  \********************/
var student1 = {
    firstName: 'Taiwo',
    lastName: 'Peter',
    age: 14,
    location: 'Lagos'
};
var student2 = {
    firstName: 'Tee',
    lastName: 'Pete',
    age: 15,
    location: 'Cairo'
};
/* array of student */
var studentList = [student1, student2];
// get the name and location
var _a = Object.keys(studentList[0]), firstName = _a[0], loc = _a[3];
// console.log(firstName, loc);
/* get table */
var table = document.getElementById('student-table');
var headerRow = [firstName, loc].map(function (header) {
    return "<th>".concat(header, "</th>");
});
table.querySelector('thead').innerHTML = headerRow.join('');
var rows = studentList.map(function (student) {
    return "\n    <tr>\n      <td>".concat(student.firstName, "</td>\n      <td>").concat(student.location, "</td>\n    </tr>\n  ");
});
table.innerHTML = rows.join('');

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBUUEsSUFBTSxRQUFRLEdBQVk7SUFDeEIsU0FBUyxFQUFFLE9BQU87SUFDbEIsUUFBUSxFQUFFLE9BQU87SUFDakIsR0FBRyxFQUFFLEVBQUU7SUFDUCxRQUFRLEVBQUUsT0FBTztDQUNsQjtBQUVELElBQU0sUUFBUSxHQUFZO0lBQ3hCLFNBQVMsRUFBRSxLQUFLO0lBQ2hCLFFBQVEsRUFBRSxNQUFNO0lBQ2hCLEdBQUcsRUFBRSxFQUFFO0lBQ1AsUUFBUSxFQUFFLE9BQU87Q0FDbEI7QUFDRCxzQkFBc0I7QUFDdEIsSUFBTSxXQUFXLEdBQW1CLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQyxDQUFDO0FBRXpELDRCQUE0QjtBQUN0QixTQUF1QixNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFqRCxTQUFTLFVBQU0sR0FBRyxRQUErQixDQUFDO0FBRXpELCtCQUErQjtBQUUvQixlQUFlO0FBQ2YsSUFBTSxLQUFLLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxlQUFlLENBQUMsQ0FBQztBQUV2RCxJQUFNLFNBQVMsR0FBRyxDQUFDLFNBQVMsRUFBRSxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsVUFBQyxNQUFNO0lBQzVDLE9BQU8sY0FBTyxNQUFNLFVBQU8sQ0FBQztBQUM5QixDQUFDLENBQUMsQ0FBQztBQUVILEtBQUssQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7QUFFNUQsSUFBTSxJQUFJLEdBQUcsV0FBVyxDQUFDLEdBQUcsQ0FBQyxVQUFDLE9BQU87SUFDbkMsT0FBTyxnQ0FFRyxPQUFPLENBQUMsU0FBUyw4QkFDakIsT0FBTyxDQUFDLFFBQVEseUJBRXpCO0FBQ0gsQ0FBQyxDQUFDLENBQUM7QUFFSCxLQUFLLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90eXBlc2NyaXB0X2RlcGVuZGVuY2llcy8uL2pzL21haW4udHMiXSwic291cmNlc0NvbnRlbnQiOlsiLyogc3R1ZGVudCBpbnRlcmZhY2UgKi9cbmludGVyZmFjZSBTdHVkZW50IHtcbiAgZmlyc3ROYW1lOiBzdHJpbmc7XG4gIGxhc3ROYW1lOiBzdHJpbmc7XG4gIGFnZTogbnVtYmVyO1xuICBsb2NhdGlvbjogc3RyaW5nO1xufVxuXG5jb25zdCBzdHVkZW50MTogU3R1ZGVudCA9IHtcbiAgZmlyc3ROYW1lOiAnVGFpd28nLFxuICBsYXN0TmFtZTogJ1BldGVyJyxcbiAgYWdlOiAxNCxcbiAgbG9jYXRpb246ICdMYWdvcydcbn1cblxuY29uc3Qgc3R1ZGVudDI6IFN0dWRlbnQgPSB7XG4gIGZpcnN0TmFtZTogJ1RlZScsXG4gIGxhc3ROYW1lOiAnUGV0ZScsXG4gIGFnZTogMTUsXG4gIGxvY2F0aW9uOiAnQ2Fpcm8nXG59XG4vKiBhcnJheSBvZiBzdHVkZW50ICovXG5jb25zdCBzdHVkZW50TGlzdDogQXJyYXk8U3R1ZGVudD4gPSBbc3R1ZGVudDEsIHN0dWRlbnQyXTtcblxuLy8gZ2V0IHRoZSBuYW1lIGFuZCBsb2NhdGlvblxuY29uc3QgW2ZpcnN0TmFtZSwgLCAsIGxvY10gPSBPYmplY3Qua2V5cyhzdHVkZW50TGlzdFswXSk7XG5cbi8vIGNvbnNvbGUubG9nKGZpcnN0TmFtZSwgbG9jKTtcblxuLyogZ2V0IHRhYmxlICovXG5jb25zdCB0YWJsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdHVkZW50LXRhYmxlJyk7XG5cbmNvbnN0IGhlYWRlclJvdyA9IFtmaXJzdE5hbWUsIGxvY10ubWFwKChoZWFkZXIpID0+IHtcbiAgcmV0dXJuIGA8dGg+JHtoZWFkZXJ9PC90aD5gO1xufSk7XG5cbnRhYmxlLnF1ZXJ5U2VsZWN0b3IoJ3RoZWFkJykuaW5uZXJIVE1MID0gaGVhZGVyUm93LmpvaW4oJycpO1xuXG5jb25zdCByb3dzID0gc3R1ZGVudExpc3QubWFwKChzdHVkZW50KSA9PiB7XG4gIHJldHVybiBgXG4gICAgPHRyPlxuICAgICAgPHRkPiR7c3R1ZGVudC5maXJzdE5hbWV9PC90ZD5cbiAgICAgIDx0ZD4ke3N0dWRlbnQubG9jYXRpb259PC90ZD5cbiAgICA8L3RyPlxuICBgXG59KTtcblxudGFibGUuaW5uZXJIVE1MID0gcm93cy5qb2luKCcnKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==