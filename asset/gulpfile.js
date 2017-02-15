var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');

gulp.task('sass', function() {
    gulp.src([
        'src/css/**/*.scss'
    ])
        .pipe(sourcemaps.init())
        .pipe(sass({
            outputStyle: 'compressed'
        }).on('error', sass.logError))
        .pipe(sourcemaps.write('./', {
            includeContent: false,
            sourceRoot: '../src/css/'
        }))
        .pipe(gulp.dest('dist/css'));
});

gulp.task('watch', ['sass'], function() {

    gulp.watch("src/css/**/*.scss", ['sass']);
});

gulp.task('default', ['watch']);
