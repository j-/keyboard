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
				loader: 'babel',
				include: [
					path.resolve(__dirname, 'src'),
				],
				exclude: [
					path.resolve(__dirname, 'node_modules'),
				],
				test: /\.jsx?$/,
				query: {
					plugins: ['transform-runtime'],
					presets: ['es2015', 'react'],
				},
			},
			{
				loader: 'style!css?modules',
				test: /\.css$/,
			},
			{
				loader: 'style!css?modules!less',
				test: /\.less$/,
			},
		],
	},
};
