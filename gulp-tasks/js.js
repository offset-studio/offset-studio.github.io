const gulp          = require('gulp')
const rename        = require('gulp-rename')
const browserSync   = require('browser-sync')
const webpackStream = require('webpack-stream')
const webpack       = require('webpack')
const plumber		= require('gulp-plumber')
const report 		= require('../report-error.js')

const config = {
	module: {
		loaders: [
			{ test: /\.csv?$/, loader: 'dsv-loader' },
			{ test: /\.json$/, loader: 'json-loader' },
			{ test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader'}
		]
	}
}

const prodConfig = Object.assign({}, config, {
	plugins: [
		new webpack.optimize.UglifyJsPlugin(),
		new webpack.optimize.OccurenceOrderPlugin(),
		new webpack.optimize.DedupePlugin()
	]
})

gulp.task('js-dev', () => {
	return gulp.src('home/js/entry.js')
		.pipe(plumber({ errorHandler: report }))
		.pipe(webpackStream(config))
		.pipe(rename('bundle.js'))
		.pipe(gulp.dest('dev'))
		.pipe(browserSync.reload({ stream: true }))
})

gulp.task('js-prod', () => {
	return gulp.src('home/js/entry.js')
		.pipe(webpackStream(prodConfig))
		.pipe(rename('bundle.js'))
		.pipe(gulp.dest('.tmp'))
})