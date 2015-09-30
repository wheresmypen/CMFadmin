var mongoose = require('mongoose');
var db = mongoose.connection;
var Schema   = mongoose.Schema;
var _ = require('lodash');

var Models = require('../models');

function MongoService(config) {
  this.config = config || {};

  _.defaults(this.config, {
    dbName: 'nosey',
    host: 'localhost'
  });

  var dbUrl = 'mongodb://CloudFoundry_ea4oo352_7qcs6nk3_2tc2src4:KYXt04IpY01lQqQhOPbF4eemagEeEHJo@ds051873.mongolab.com:51873/CloudFoundry_ea4oo352_7qcs6nk3'
  // var dbUrl = 'mongodb://' + this.config.host + '/' + this.config.dbName;
  console.log('dbUrl: ', dbUrl);
  mongoose.connect(dbUrl);
}

/*
 * param - data -- hash of data to insert {object}
 * param - model -- name of model setup in models -- {string}
 */
MongoService.prototype.add = function(data, model, callback) {

  console.log('MongoService.add executed');

	// Let's create an instance of the model
  var model = new Models[model](data);
  
	model.save(function(err, res) {
		if (err) {
			return callback(err, null);
		}
		return callback(null, 'Success');
	});
};

MongoService.prototype.show = function(model, callback) {
    console.log('MongoService.show executed');

    Models[model].find({}, function(err, results) {
      if (err) return callback(err);
      return callback(null, results);
    });
};

// var model = new models[0]("a", "b", "c");
// Employee schema and model


MongoService.prototype.clearAll = function(callback){
  console.log('MongoService.clearAll executed');

    Models.Employee.remove({}, function(err, results) {
      if (err) return callback(err);
      return callback(null, results);
    });

  return callback(null, 'Destroy');
}

module.exports = MongoService;