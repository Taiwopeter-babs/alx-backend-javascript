export default class HolbertonCourse {
    constructor(name, length, students) {
        this._name = name;
        this._length = length;
        this._students = students;
    }

    get name() {
        return this._name;
    }
    set name(value) {
        try {
            if (typeof value !== 'string') {
                throw new TypeError('Name must be a string');
            }
        } catch (error) {
            console.log(error)
        }
        this._name = value;
    }

    get length() {
        return this._length;
    }
    set length(value) {
        try {
            if (typeof value !== 'number') {
                throw new TypeError('Length must be a number');
            }
            this._length = value;
        } catch (error) {
            console.log(error);
        }

    }

    get students() {
        return this._students;
    }
    set students(value) {

        try {
            for (let ele of value) {
                if (typeof ele !== 'string') {
                    throw new TypeError('Name must be a string');
                }
            }
            this._students = value;
        } catch (error) {
            console.log(error);
        }
    }
}
