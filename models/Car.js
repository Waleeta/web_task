var mongoose = require('mongoose');
var mongoose_double = require('mongoose-double')(mongoose);

var SchemaTypes = mongoose.Schema.Types;
// example: {double: SchemaTypes.Double}

var CarSchema = new mongoose.Schema({
		carName: {type: String, default: ''},
		year: {type: Number, default: 2000},
		priceRange: {type: String, default: ''},
		mileage: {type: Number, default: 100000},
		itemNumber: {type: String, default: ''},
		vin: {type: String, default: ''},
		cylinders: {type: String, default: ''},
		cityMpg: {type: Number, default: 0},
		highwayMpg: {type: Number, default: 0},
		engine: {type: SchemaTypes.Double, default: 1.3},
		carImages: {type: Array, default: [ "https://s3.us-east-2.amazonaws.com/webtaskimages/mazda-interior_1.jpg",
							"https://s3.us-east-2.amazonaws.com/webtaskimages/mazda-interior_6.jpeg",
							"https://s3.us-east-2.amazonaws.com/webtaskimages/mazda-interior_5.jpg",
							"https://s3.us-east-2.amazonaws.com/webtaskimages/mazda-interior_4.jpg",
							"https://s3.us-east-2.amazonaws.com/webtaskimages/mazda-interior_3.jpg",
							"https://s3.us-east-2.amazonaws.com/webtaskimages/mazda-interior_2.jpg" ]},
		timestamp: {type: Date, default: Date.now}
})

module.exports = mongoose.model('CarSchema', CarSchema)