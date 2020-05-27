const Student = require('../models/student');

module.exports.getAll = (req, res, next) => {
    const students = Student.getAll();
    res.render('students', {
        title: 'List Student',

        students: students,
    });
};

module.exports.navigateToAddPage = (req, res, next) => {
    res.render('add-student', {
        title: 'Add student',
    });
};

module.exports.add = (req, res, next) => {
    const id = req.body.id;
    const name = req.body.name;
    const age = req.body.age;
    const className = req.body.className;
    const student = new Student(id, name, age, className);

    student.add();
    res.redirect('/');
};

module.exports.getById = (req, res, next) => {
    let student = Student.getById(req.params.id);
    res.render('update-student', {
        title: 'Update student',
        id: student.id,
        name: student.name,
        age: student.age,
        className: student.className,
    });
};

module.exports.edit = (req, res, next) => {
    const id = req.body.id;
    const updatedName = req.body.name;
    const updatedAge = req.body.age;
    const updatedClassName = req.body.className;

    Student.edit(id, updatedName, updatedAge, updatedClassName);
    res.redirect('/');
};

module.exports.delete = (req, res, next) => {
    Student.delete(req.params.id);
    res.redirect('/');
};

module.exports.search = (req, res, next) => {
    console.log(req.body);
    // Student.search();
    // res.redirect('/');
};
