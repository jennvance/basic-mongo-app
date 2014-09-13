var mongoose = require('mongoose');

var vehicleSchema = mongoose.Schema({
	name: String,
	color: String,
	wheels: {
		type: Number,
		default: 4
	}
});

vehicleSchema.methods.honk = function(){
	console.log( this.name + ' says HONK!' );
};

var Vehicle = mongoose.model('Vehicle', vehicleSchema);

//this module exports the model named Vehicle
//so that other modules can require() it
module.exports = Vehicle;