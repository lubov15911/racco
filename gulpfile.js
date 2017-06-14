let gulp = require('gulp');
// let gutil = require('gulp-util');
// let changed = require('gulp-changed');
// let plumber = require('gulp-plumber');
// let imagemin = require('gulp-imagemin');
let minifyCSS = require('gulp-minify-css');
let less = require('gulp-less');

const SRC_LESS = './styles/less/*.less';
const MAIN_LESS_FILE = 'styles/less/main.less';
const SRC_CSS = './styles/css/*.css';
const CSS_FOLDER = 'styles/css';
const DIST = 'dist';

gulp.task('less-conversion', function () {
    gulp.src(MAIN_LESS_FILE)
        .pipe(less())
        .pipe(gulp.dest(CSS_FOLDER));
});

gulp.task('watch-less-files', function () {
   gulp.watch(SRC_LESS, ['less-conversion']);
});

// gulp.task('watch_SRC_CSS', function () {
//     gulp.watch(SRC_CSS, ['minify-css']);
// });

gulp.task('minify-css', function () {
    gulp.src(SRC_CSS)
        .pipe(minifyCSS({ keepSpecialComments: 1 }))
        .pipe(gulp.dest(DIST));
});

gulp.task('default', ['watch-less-files']);