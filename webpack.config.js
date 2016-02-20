var path = require('path');

module.exports = {
	entry: './src/main.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js'
	},
	module: {
		loaders: [
			{
				loader: 'babel-loader',

				include: [
					path.resolve(__dirname, 'src'),
				],

				test: /\.js$/,

				query: {
					plugins: ['transform-runtime'],
					presets: ['es2015'],
				},
			},
		],
	},
};
