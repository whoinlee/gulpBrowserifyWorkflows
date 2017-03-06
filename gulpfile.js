//-- node js commands
var gulp = require('gulp'),	
	gutil = require('gulp-util'),
	coffee = require('gulp-coffee');

var coffeeSources = ['components/coffee/tagline.coffee'];

gulp.task('coffee', function() {
	// gutil.log("Learning Gulp & Browserify Workflows");
	gulp.src(coffeeSources)
		.pipe(
			coffee({ bare:true })
			.on('error', gutil.log)
		)
		.pipe(
			gulp.dest('components/scripts')
		)
});