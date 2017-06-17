let gulp = require('gulp');
let minifyCSS = require('gulp-minify-css');
let less = require('gulp-less');
let livereload = require('gulp-livereload');

const SRC_LESS = './styles/less/*.less';
const MAIN_LESS_FILE = 'styles/less/main.less';
const SRC_CSS = './styles/css/*.css';
const CSS_FOLDER = 'styles/css';
const DIST = 'dist';

gulp.task('less-conversion', function () {
    gulp.src(MAIN_LESS_FILE)
        .pipe(less())
        .pipe(gulp.dest(CSS_FOLDER))
        .pipe(livereload());
});

gulp.task('watch-less-files', function () {
    livereload.listen({ start: true });
    gulp.watch(SRC_LESS, ['less-conversion']);
});

gulp.task('minify-css', function () {
    gulp.src(SRC_CSS)
        .pipe(minifyCSS({ keepSpecialComments: 1 }))
        .pipe(gulp.dest(DIST));
});

gulp.task('default', ['watch-less-files']);