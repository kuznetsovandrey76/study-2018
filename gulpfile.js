var gulp = require('gulp'),
	sass = require('gulp-sass');

gulp.task('sass', function() {
	// return gulp.src('app/sass/*.sass')
	return gulp.src('app/sass/main.sass')
		.pipe(sass())
		.pipe(gulp.dest('app/css'))
});	

gulp.task('watch', function() {
	gulp.watch('app/sass/**/*.sass', ['sass']);
});

// gulp.task('mytask', function() {
// 	return gulp.src('source-files') // берем
// 	.pipe(plugin()) // делаем
// 	.pipe(gulp.dest('folder')) // выводим
// });

