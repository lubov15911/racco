var gulp = require('gulp');
var gutil = require('gulp-util');
var changed = require('gulp-changed');
var plumber = require('gulp-plumber');
var imagemin = require('gulp-imagemin');
var minifyCSS = require('gulp-minify-css');
var less = require('gulp-less');

var SRC_LESS = './styles/*.less';
var SRC_CSS= './css/*.css';
var DIST = 'less';

gulp.task('less', function () {
    gutil.log('chage');
    gulp.src('styles/main.less')
        .pipe(less())
        .pipe(gulp.dest('css'));
});

gulp.task('changed', function () {
    return gulp.src(SRC)
        .pipe(plumber())
        .pipe(changed(DIST))
        .pipe(gulp.dest(DIST));
});

gulp.task('watch_SRC_LESS', function () {
   gulp.watch(SRC_LESS, ['less']);
});

gulp.task('watch_SRC_CSS', function () {
    gulp.watch(SRC_CSS, ['minify-css']);
});

gulp.task('minify-css', function () {
    gulp.src('./css/*.css')
        .pipe(minifyCSS({ keepSpecialComments: 1 }))
        .pipe(gulp.dest('css-min'));
});

gulp.task('default', ['watch_SRC_LESS']);