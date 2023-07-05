/* teacher interface */
interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  contract?: boolean;
}

// director interface
interface Directors extends Teacher {
  numberOfReports: number;
}

const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};

// interface for printTeacher function
interface printTeacherFunction {
  firstName: string;
  lastName: string;
}

/**
 * 
 * @param firstName 
 * @param lastName 
 * @returns: The first letter of the firstName and the full lastName
 */
function printTeacher(data: printTeacherFunction) {
  const firstLetter: string = data.firstName[0];
  return `${firstLetter}. ${data.lastName}`;
}


// Declaring a class and an interface
interface StudentClassInterface {
  workOnHomework(): string;
  displayName(): string;
}

interface StudentClassConstructor {
  firstName: string;
  lastName: string;
}

class StudentClass implements StudentClassInterface {

  firstName: string;
  lastName: string;

  constructor(student: StudentClassConstructor) {
    this.firstName = student.firstName;
    this.lastName = student.lastName;
  }

  workOnHomework(): string {
    return 'Currently working';
  }

  displayName(): string {
    return `${this.firstName}`;
  }
}
