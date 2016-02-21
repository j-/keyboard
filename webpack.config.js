var path = require('path');

module.exports = {
	entry: './src/main.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js'
	},
	resolve: {
		extensions: ['', '.js', '.jsx'],
	},
	module: {
		loaders: [
			{
				loader: 'babel-loader',
				include: [
					path.resolve(__dirname, 'src'),
				],
				test: /\.jsx?$/,
				query: {
					plugins: ['transform-runtime'],
					presets: ['es2015', 'react'],
				},
			},
			{
				loader: 'style!css!less',
				test: /\.less$/,
			},
			{
				test: /\.css$/,
				loader: 'style!css',
			},
		],
	},
};
