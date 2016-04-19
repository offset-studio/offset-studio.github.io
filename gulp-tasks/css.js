const gulp          = require('gulp')
const stylus 		= require('gulp-stylus')
const autoprefixer 	= require('gulp-autoprefixer')
const rename        = require('gulp-rename')
const clean		    = require('gulp-clean-css')
const browserSync   = require('browser-sync')
const plumber       = require('gulp-plumber')
const report 	    = require('../report-error.js')

//compile styl to css and autoprefix
gulp.task('css-dev', () => {
	gulp.src('home/css/config.styl')
		.pipe(plumber({ errorHandler: report }))
		.pipe(stylus())
		.pipe(autoprefixer())
		.pipe(rename('main.css'))
		.pipe(gulp.dest('dev'))
		.pipe(browserSync.reload({stream: true}))
})

//compile all styl and autoprefix, and minify
gulp.task('css-prod', () => {
	gulp.src('home/css/config.styl')
		.pipe(stylus())
		.pipe(autoprefixer())
		.pipe(clean())
		.pipe(rename('main.css'))
		.pipe(gulp.dest('.tmp'))
})
