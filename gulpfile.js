var gulp = require('gulp');
var sass = require('gulp-ruby-sass');
var autoprefixer = require('gulp-autoprefixer');

// Styles
gulp.task('styles', function() {
    return sass('styles/base/main-layout.scss', { style: 'expanded'})
        .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
        .pipe(gulp.dest('styles/base'))
});

// Default
gulp.task('default', function() {
    gulp.start('styles');
});

// Watch
gulp.task('watch', ['default'], function() {
    gulp.watch('styles/**/*.scss', ['styles']);
});