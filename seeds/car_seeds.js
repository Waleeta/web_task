var Car = require('../models/Car');
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/web_task')

var cars = [
		new Car ({
				carName: 'Mazda CX-5',
				year: 2011,
				priceRange: '$15,000 - $20,000',
				mileage: 195000,
				itemNumber: '1432K',
				vin: 'D6657H8771098J321',
				cylinders: 'L4',
				cityMpg: 25,
				highwayMpg: 35,
				engine: 1.5,
				carImages: [
						"https://s3.us-east-2.amazonaws.com/webtaskimages/mazda-interior_1.jpg",
						"https://s3.us-east-2.amazonaws.com/webtaskimages/mazda-interior_6.jpeg",
						"https://s3.us-east-2.amazonaws.com/webtaskimages/mazda-interior_5.jpg",
						"https://s3.us-east-2.amazonaws.com/webtaskimages/mazda-interior_4.jpg",
						"https://s3.us-east-2.amazonaws.com/webtaskimages/mazda-interior_3.jpg",
						"https://s3.us-east-2.amazonaws.com/webtaskimages/mazda-interior_2.jpg",
					],
				timestamp: Date.now
		}),
	]



	var done = 0;

	for (var i=0; i< cars.length;i++) {
			cars[i].save(function(err, result) {
					done++;
					if (done===cars.length) {
							exit();
					}
			});
	}


	function exit() {
		mongoose.disconnect();
	}
	