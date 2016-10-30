//var express = require('express');
//var router = express.Router();

var flight = require('../flight');

// flight objects

var flight1 = flight({
	number: 1,
	origin: 'LAX',
	destination: 'DCA',
	departs: '9AM',
	arrives: '4PM'
});

var flight2 = flight({
	number: 2,
	origin: 'LAX',
	destination: 'PDX',
	departs: '10AM',
	arrives: '12PM'
});

/* GET home page. */
exports.flight1 = function(req, res) {
  res.json(flight1.getInformation());
};

exports.flight2 = function(req, res) {
  res.json(flight2.getInformation());
};
//module.exports = router;
