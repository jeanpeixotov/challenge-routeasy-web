var gulp = require('gulp'),
    browserSync = require('browser-sync').create();

gulp.task('app', function() {
    gulp.src(['app/**/*.js'])
    .pipe(gulp.dest('./dist/js'))
});

gulp.task('css', function() {
    gulp.src(['assets/css/*.css'])
    .pipe(gulp.dest('./dist/'))
});

gulp.task('dist', function() {
  gulp.src(['index.html'])
  .pipe(gulp.dest('./dist/'))
});

gulp.task('default', ['css', 'app'], function() {
    gulp.start('dist');
});

gulp.task('watch', function() {
    browserSync.init({
        server: "./"
    });
    gulp.watch('index.html', ['dist']).on('change', browserSync.reload);
    gulp.watch('src/*.js', ['dist']).on('change', browserSync.reload);
    gulp.watch('*.css', ['dist']).on('change', browserSync.reload);
    //FIX GULP JS E CSS
});