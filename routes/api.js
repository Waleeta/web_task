var express = require('express')
var router = express.Router()
var CarController = require('../controllers/CarController')

router.get('/:resource', function(req, res, next){
	var resource = req.params.resource

// ******************************************************************
	if (resource == 'car') {
			CarController.find(req.query, function(err, results){
					if (err) {
							res.json({
								confirmation: "fail",
								message: err
							})

							return 
					}

					res.json({
						confirmation: "success",
						results: results
					})

			})
	}

})

router.get('/:resource/:id', function(req,res,next){
		var resource = req.params.resource
		var id = req.params.id

		if (resource == 'car') {
			CarController.findById(id, function(err, result){
					if (err) {
							res.json({
								confirmation: "fail",
								message: "not found"
							})

							return
					}

					res.json({
							confirmation: "success",
							result: result
					})
			})
		}

})

router.post('/:resource', function(req, res, next) {
		var resource = req.params.resource
		if (resource == 'car') {
			CarController.create(req.body, function(err, result){
					if(err) {
						res.json({
								confirmation: "fail",
								message: err
						})
						return
					}
					res.json({
						confirmation: 'success',
						result: result
					})
			})
		}
})

	

module.exports = router