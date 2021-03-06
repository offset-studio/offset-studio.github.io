const gulp        = require('gulp')
const runSequence = require('run-sequence')

gulp.task('dev', () => {
	runSequence(
		'clean-dev',
		'css-dev',
		'js-dev',
		'html-dev',
		'browser-sync'
	)
})
