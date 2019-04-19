'use strict'

var gulp = requiere('gulp'),
	sass = requiere('gulp-sass');

	gulp.task('sass', function(){
		gulp.src('./css/*.scss')
			.pipe(sass().on('error', sass.logError))
			.pipe(gulp.dest('./css'));
	})