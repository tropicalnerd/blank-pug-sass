"use strict";

const gulp = require('gulp');
const del = require('del');
const gulpPug = require('gulp-pug');
const gulpSass = require('gulp-sass')(require('sass'));
const browserSync = require('browser-sync').create();

function clean() {
    return del('dest/**');
}

function copy() {
    return gulp
        .src('./public/**/*', { base: './public' })
        .pipe(gulp.dest('./dest'));
}

function pug() {
    return gulp
        .src('./src/pug/*.pug')
        .pipe(gulpPug({pretty: true}))
        .pipe(gulp.dest('./dest'));
}

function sass() {
    return gulp
        .src('./src/sass/*.{sass,scss}')
        .pipe(gulpSass().on('error', gulpSass.logError))
        .pipe(gulp.dest('./dest'))
        .pipe(browserSync.stream());
}

function init(done) {
    browserSync.init({
        server: {
            baseDir: "./dest"
        },
        port: 3000,
        open: false
    });
    done();
}


function reload(done) {
    browserSync.reload();
    done();
}

function watch() {
    gulp.watch("./src/pug/*.pug", pug);
    gulp.watch("./src/sass/*.{sass,scss}", sass);
    gulp.watch("./public/**/*", copy);
    gulp.watch("./dest/**/*.{html,js}", reload);
}

const build = gulp.series(clean, gulp.parallel(pug, sass, copy));
const serve = gulp.series(clean, gulp.parallel(pug, sass, copy, init, watch));

exports.clean = clean;
exports.copy = copy;
exports.pug = pug;
exports.sass = sass;
exports.build = build;
exports.serve = serve;
exports.default = build;