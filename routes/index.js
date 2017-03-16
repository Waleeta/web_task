var express = require('express');
var router = express.Router();
var Car = require('../models/Car')

/* GET home page. */
router.get('/', function(req, res, next) {
  var cars = Car.find();
  res.render('index', { title: 'Cars', cars: cars });
}); 

router.get('/createcar', function(req, res, next) {
	// var cars = Car.find()
  res.render('createcar', null);
});

router.get('/updatecar', function(req, res, next) {
	// var cars = Car.find()
  res.render('updatecar', null);
});




module.exports = router;
