
const webpack = require('webpack');
const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const mode = process.env.NODE_ENV || 'development';
const prod = mode === 'production';

module.exports = {
	entry: './main.js',
	resolve: {
		alias: {
			svelte: path.dirname(require.resolve('svelte/package.json'))
		},
		extensions: ['.mjs', '.js', '.svelte'],
		mainFields: ['svelte', 'browser', 'module', 'main']
	},
	output: {
		path: path.resolve(__dirname, 'public'),
		filename: 'js/bundle.js',
	},
	module: {
		rules: [
			{
				test: /\.svelte$/,
				use: {
					loader: 'svelte-loader',
					options: {
						preprocess: require('svelte-preprocess')({
							scss: true,
						}),
						compilerOptions: {
							dev: !prod,
						},
						emitCss: prod,
						hotReload: !prod,
					},
				},
			},
			{
				test: /\.scss$/i,
				exclude: /node_modules/,
				use: [
					MiniCssExtractPlugin.loader,
					{
						loader: 'css-loader',
						options: {
							url: false,
						},
					},
					{
						loader: 'sass-loader',
						options: {},
					},
				],
			},
		],
	},
	plugins: [
		new webpack.IgnorePlugin({
			resourceRegExp: /^\.\/locale$/,
			contextRegExp: /moment$/,
		}),
		new MiniCssExtractPlugin({
			filename: 'css/bundle.css',
		}),
	],
}
