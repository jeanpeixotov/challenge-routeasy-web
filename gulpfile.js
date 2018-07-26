var gulp = require('gulp'),
    sass = require('gulp-sass'),
    rename = require('gulp-rename'),
    minifyCss = require('gulp-minify-css'),
    autoprefixer = require('gulp-autoprefixer'),
    browserSync = require('browser-sync').create();

gulp.task('sass', function() {
    gulp.src('scss/style.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({
        browsers: ['last 20 versions'],
        cascade: false
    }))
    .pipe(minifyCss())
    .pipe(rename('style.min.css'))
    .pipe(gulp.dest('./dist/css/'));
});

gulp.task('app', function() {
    gulp.src(['app/*.js'])
    .pipe(gulp.dest('./dist/js'))
  });

gulp.task('dist', function() {
  gulp.src(['index.html'])
  .pipe(gulp.dest('./dist/'))
});

gulp.task('default', ['sass', 'app'], function() {
    gulp.start('dist');
});

gulp.task('watch', function() {
    browserSync.init({
        server: "./"
    });
    gulp.watch('scss/**/*.scss', ['sass']).on('change', browserSync.reload);
    gulp.watch('index.html', ['dist']).on('change', browserSync.reload);
    gulp.watch('app/*.js', ['dist']).on('change', browserSync.reload);
    gulp.watch('scss/**/*.scss', ['dist']).on('change', browserSync.reload);

});