module.exports = {
	entry: "./src/main.js",
	output: {
		path: "./public/javascripts/",
		filename: "bundle.js"
	},
	module: {
		loaders: [
			{test: /\.js$/, loaders: ['babel']}
		]
	}
}