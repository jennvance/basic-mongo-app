var express = require('express');
var router = express.Router();
//require the model we created
var Vehicle = require('../models/vehicle');

/* GET home page. */
router.get('/', function(req, res) {
	Vehicle.find(function(err, vehicles){
		//make each vehicle HONK
		for(var i = 0; i < vehicles.length; i++){
			vehicles[i].honk();
		}

		res.render('index', { 
			title: 'Express',
			//vehicles variable will contain an array of 
			//all the vehicles we've created
			vehicles: vehicles 
		});
	});
});

router.get('/newVehicle', function(req, res){
	var vehicleName = req.param('name');
	var vehicleColor = req.param('color');
	//Create new vehicle object
	var newVehicle = new Vehicle({
		name: vehicleName,
		color: vehicleColor
	});

	//Store it in the database
	newVehicle.save(function(err, savedVehicle){
		//this is a server side module, so these console.logs
		//will go to the terminal, not the browser console
		console.log(err);
		console.log(savedVehicle);

		//Redirect back to homepage
		res.redirect('/');
	});
});

router.get('/view', function(req, res){
	Vehicle.find(function(err, vehicles){
		res.send(vehicles);
	});
});

module.exports = router;
