const gulp        = require('gulp')
const runSequence = require('run-sequence')

gulp.task('dev', function() {
	runSequence(
		// 'clean-dev',
		'css-dev',
		// 'js-dev',
		// 'assets-dev',
		'html-dev',
		'browser-sync'
	)
})
