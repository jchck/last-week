var gulp = require('gulp');
var sass = require('gulp-sass');
var prefix = require('gulp-autoprefixer');

gulp.task('default', function(){
	gulp.src('assets/scss/app.scss')
	.pipe(sass())
	.pipe(prefix())
	.pipe(gulp.dest('assets/css'));
});