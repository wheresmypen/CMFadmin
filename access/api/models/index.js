var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

// Employee schema and model
var employeeSchema = new Schema({
    name : String,
    phone : String,
    address: String
});


// employeeSchema.methods.findSimilar = function () {
// 	return this.model('Employee').find();
// };

var Employee = mongoose.model('Employee', employeeSchema);


// add all new models to this object
var Models = {
	Employee: Employee
};

module.exports = Models;