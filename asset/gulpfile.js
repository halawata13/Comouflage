var gulp = require("gulp");
var babel = require("gulp-babel");
var webpack = require('gulp-webpack');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var browserSync = require("browser-sync").create();
var uglify = require('gulp-uglify');
var pump = require('pump');

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
        .pipe(gulp.dest('dist/css'))
        .pipe(browserSync.stream());
});

gulp.task('babel', function() {
    gulp.src("src/js/*.js")
        .pipe(webpack({
            output: {
                filename: 'main.js',
            }
        }))
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(gulp.dest("dist/js"))
        .pipe(browserSync.stream());
});

gulp.task('compress', function(cb) {
    pump([
            gulp.src('dist/js/*.js'),
            uglify(),
            gulp.dest('dist/js')
        ],
        cb
    );
});

gulp.task('bs-reload', function () {
    browserSync.reload();
});

gulp.task('watch', ['sass', 'babel'], function() {

    browserSync.init({
        proxy: 'localhost:8000'
    });

    gulp.watch("src/css/**/*.scss", ['sass']);
    gulp.watch("src/js/**/*.js", ['babel']);
});

gulp.task('default', ['watch']);
gulp.task('build', ['sass', 'babel', 'compress']);
