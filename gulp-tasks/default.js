const gulp			= require('gulp')
const runSequence 	= require('run-sequence')

// Default task to be run with `gulp`
gulp.task('default', ['dev'], function() {
	gulp.watch('home/css/**/*.styl', ['css-dev'])
	// gulp.watch('data/*.json', ['html-dev'])
	gulp.watch('home/html/**/*.hbs', ['html-dev'])
	// gulp.watch('src/js/**/*.js', ['js-dev'])
	// gulp.watch('src/assets/**/*', ['assets-dev'])
	gulp.watch('dev/index.html', ['browser-sync-reload'])
})
