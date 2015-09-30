var MongoService = require('../services/mongo_service');

var mongo = new MongoService();


function EmployeeHandler() {}

EmployeeHandler.prototype.add = function (req, res){
	var employeeData = req.body;
	// console.log (employeeData);
	console.log('adding employee...');
	mongo.add(employeeData, 'Employee', function mongoCallback(err, response) {
		if (err) res.send('error: ', err);
		if (response === "Success") {
			res.send('Sucessfully added to db');
		}
	});
};

EmployeeHandler.prototype.show = function (req, res){
	console.log('EmployeeHandler.show executed');
	var model = req.query.model || "Employee";
	mongo.show(model, function(err, data) {
		if (err) {
			console.error(err);
			res.status(500).json({error: err, message: err.message, stack: err.stack});
		}
		res.status(200).send(data);
	});
};


EmployeeHandler.prototype.clearAll = function (req, res){
	console.log('EmployeeHandler.clearAll executed');
	// var model = req.query.model || "Employee";
	mongo.clearAll(function mongoCallback(err, response) {
	if (err) res.send('error: ', err);
		if (response === "Destroy") {
			res.send('Sucessfully cleared db');
		}
	});
};

module.exports = EmployeeHandler;