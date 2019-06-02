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
		hot: true,
		proxy: {
			'/api': {
				target: 'http://localhost:7003',
				pathRewrite: {'^/api' : ''}		
			}
		}
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
		symlinks: false,
		extensions: ['.jsx', '.js', '.tsx', 'ts'], 
		modules: [ path.resolve(__dirname, 'src'), 'node_modules' ] 
	}
}; 