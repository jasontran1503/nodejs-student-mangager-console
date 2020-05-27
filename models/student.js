const students = [];

module.exports = class Student {
  constructor(id, name, age, className) {
    this.id = id;
    this.name = name;
    this.age = age;
    this.className = className;
  }

  static getAll() {
    return students;
  }

  static getById(id) {
    let studentById;
    students.forEach((student) => {
      if (student.id === id) {
        studentById = student;
      }
    });

    return studentById;
  }

  add() {
    students.push(this);
  }

  static delete(id) {
    let index = students.findIndex((student) => student.id === id);
    students.splice(index, 1);
  }

  static edit(id, updatedName, updatedAge, updatedClassName) {
    students.forEach((student) => {
      if (student.id === id) {
        student.name = updatedName;
        student.age = updatedAge;
        student.className = updatedClassName;
      }
    });
  }

  static search(name) {
    let studentsFound = [];
    students.forEach((student) => {
      if (student.name === name) {
        studentsFound.push(student);
      }
    });

    return studentsFound;
  }
};
