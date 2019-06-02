const path = require('path');
const webpack = require('webpack');


module.exports = {
	entry: './src/App.tsx',
	output: {
		path: path.resolve(__dirname, 'bin'),
		filename: 'app.bundle.js',
		publicPath: '/bin'
	},
	devtool: "eval-source-map",
	devServer: {
		contentBase: "./",
		hot: true
	},
	module: {
		rules: [
			{
				test: /\.tsx$/,
				use:{
					loader: 'babel-loader'
				},
				exclude: [
					/node_modules/
				]
			}
		]
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin()
	],
	resolve: {
		extensions: ['.jsx', '.js', '.tsx'], 
		modules: [ path.resolve(__dirname, 'src'), 'node_modules' ] 
    }
}; 