const express = require('express');
const AppController = require('../controllers/AppController');
const StudentsController = require('../controllers/StudentsController');

const indexRouter = express.Router();

indexRouter.get('/', AppController.getHomePage);
indexRouter.get('/students', StudentsController.getAllStudents);
indexRouter.get('/students/:major', StudentsController.getAllStudentsByMajor);

module.exports = indexRouter;
