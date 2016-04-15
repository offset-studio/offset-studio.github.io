const gulp 			= require('gulp')
const hb 			= require('gulp-hb')
const rename 		= require('gulp-rename')
// const include 		= require('gulp-file-include')
const fs 			= require('fs')
const plumber 		= require('gulp-plumber')
const report  		= require('../report-error.js')
// const browserSync   = require('browser-sync')

// const svgPath = process.cwd() + '/svg/'

gulp.task('html-dev', () => {
	const hbStream = hb()
		.partials('./home/html/partials/**/*.hbs')
		.helpers('./home/html/helpers/*.js')
		.data('./home/data/**/*.{js,json}')
		.data({timestamp: Date.now()})


	return gulp.src('./home/html/index.hbs')
		.pipe(plumber({ errorHandler: report}))
		.pipe(hbStream)
		// .pipe(include({ basepath: svgPath }))
		.pipe(rename('index.html'))
		.pipe(gulp.dest('dev'))
		// .pipe(browserSync.reload({stream: true}))
})

gulp.task('html-prod', () => {
	const hbStream = hb()
		.partials('./home/html/partials/**/*.hbs')
		.helpers('./home/html/helpers/*.js')
		.data('./home/data/**/*.{js,json}')
		.data({timestamp: Date.now()})


	return gulp.src('./home/html/index.hbs')
		.pipe(plumber({ errorHandler: report}))
		.pipe(hbStream)
		// .pipe(include({ basepath: svgPath }))
		.pipe(rename('index.html'))
		.pipe(gulp.dest(''))
})
