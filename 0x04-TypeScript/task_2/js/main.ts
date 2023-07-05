/* INTERFACES */
interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string
}

interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string
}

// CLASSES

class Director implements DirectorInterface {
  workFromHome(): string {
    return 'Working from home';
  }
  getCoffeeBreak(): string {
    return 'Getting a coffee break';
  }
  workDirectorTasks(): string {
    return 'Getting to director tasks';
  }
}

class Teacher implements TeacherInterface {
  workFromHome(): string {
    return 'Cannot work from home';
  }
  getCoffeeBreak(): string {
    return 'Cannot have a coffee break';
  }
  workTeacherTasks(): string {
    return 'Getting to work';
  }
}

/**
 * 
 * @param salary
 * @returns A new Director or Teacher instance
 */
function createEmployee(salary: number | string): Director | Teacher {
  if (typeof salary === 'number' && salary < 500) {
    return new Teacher();
  }
  return new Director;
}

function isDirector(employee: any): employee is Director {
  return employee instanceof Director;
}

function executeWork(employee: any) {
  if (isDirector(employee)) {
    return employee.workDirectorTasks();
  } else {
    return employee.workTeacherTasks();
  }
}

// string literal types
type Students = "Math" | "History";

function teachClass(todayClass: Students): string {
  if (todayClass === "Math") {
    return 'Teaching Math';
  } else if (todayClass === 'History') {
    return 'Teaching Math'
  }
}

