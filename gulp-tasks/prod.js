const gulp        = require('gulp')
const runSequence = require('run-sequence')

gulp.task('prod', () => {
	runSequence(
		'clean-prod',
		'css-prod',
		'js-prod',
		'html-prod',
		'smoosh-prod'
	)
})
