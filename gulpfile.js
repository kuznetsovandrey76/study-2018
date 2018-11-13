var gulp 		= require('gulp'),
	sass 		= require('gulp-sass'),
	browserSync = require('browser-sync');

gulp.task('sass', function() {
	// return gulp.src('app/sass/*.sass')
	return gulp.src('app/sass/main.sass')
		.pipe(sass())
		.pipe(gulp.dest('app/css'))
		.pipe(browserSync.reload({stream: true}))
});	

gulp.task('browser-sync', function() {
	browserSync({
		server: {
			baseDir: 'app'
		},
		notify: false // уведомления
	});
});

gulp.task('watch', ['browser-sync', 'sass'], function() {
	gulp.watch('app/sass/**/*.sass', ['sass']);
	gulp.watch('app/*.html', browserSync.reload());
	gulp.watch('app/js/**/*.js', browserSync.reload());
});

// gulp.task('mytask', function() {
// 	return gulp.src('source-files') // берем
// 	.pipe(plugin()) // делаем
// 	.pipe(gulp.dest('folder')) // выводим
// });

