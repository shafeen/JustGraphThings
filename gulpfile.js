'use strict';

let browserify = require('browserify');
let gulp = require('gulp');
let source = require('vinyl-source-stream');
let buffer = require('vinyl-buffer');
let log = require('gulplog');
let uglify = require('gulp-uglify');
let sourcemaps = require('gulp-sourcemaps');
let reactify = require('reactify');

gulp.task('javascript', function () {
    // set up the browserify instance on a task basis
    let b = browserify({
        entries: './entry.js',
        debug: true,
        // defining transforms here will avoid crashing your stream
        transform: [reactify]
    });

    return b.bundle()
        .pipe(source('entry.js'))
        .pipe(buffer())
        .pipe(sourcemaps.init({loadMaps: true}))
        // Add transformation tasks to the pipeline here.
        .pipe(uglify())
        .on('error', log.error)
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('./dist/js/'));
});