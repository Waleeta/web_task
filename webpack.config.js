// What to tell Webpack what to tell Babel to do. (How to bundle Babel)
// this is the file that runs our code

var webpack = require('webpack')
var path = require('path')

// boilerplate templates: 

module.exports = {
// react code that we write, this is where to find it
	entry: {
		// this is where to find our react code:
			app: './src/app.js'
	},
	// this is where the react code goes out to
	output: {
			// autogenerated when you run webpack
			filename: 'public/build/bundle.js',
			// for debugging:
			sourceMapFilename: 'public/build/bundle.map'
	},
	devtool: '#source-map',
	module: {
			loaders: [
					{
						test: /\.jsx?$/,
						exclude: /(node_modules)/,
						loader: 'babel-loader',
						query: {
								presets: ['react', 'es2015']
						}
							
					}
			]

	}


}