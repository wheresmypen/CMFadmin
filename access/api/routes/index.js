var express = require('express');
var router = express.Router();

// handlers
var EmployeeHandler = require('../handlers/employee_handler');
var employeeHandler = new EmployeeHandler();

// routes
router.get('/heartbeat', function(req, res) {
	res.send('this is the api');
});

// To Get all employees
router.get('/employee', employeeHandler.show);

// To add an employee
router.post("/employee", employeeHandler.add);

router.get('/DEADEND', employeeHandler.clearAll);



module.exports = router;