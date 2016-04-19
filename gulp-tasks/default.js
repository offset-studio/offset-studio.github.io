const gulp			= require('gulp')
const runSequence 	= require('run-sequence')

// Default task to be run with `gulp`
gulp.task('default', ['dev'], () => {
	gulp.watch('home/css/**/*.styl', ['css-dev'])
	gulp.watch('home/html/**/*.hbs', ['html-dev'])
	gulp.watch('home/js/**/*.js', ['js-dev'])
	gulp.watch('dev/index.html', ['browser-sync-reload'])
})
