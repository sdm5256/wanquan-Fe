'use strict';
 
var gulp = require('gulp'),
	sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),
	notify = require('gulp-notify'),
    plumber = require('gulp-plumber'),
    cssmin = require('gulp-minify-css');
    
gulp.task('sass', function () {
	console.log('sass')
  return gulp.src('./scss/*.scss')
    .pipe(sourcemaps.init())
    .pipe(plumber({errorHandler: notify.onError('Error: <%= error.message %>')}))
    .pipe(sass())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./static/css'));
});

gulp.task('cssmin', function () {
    gulp.src('/scss/*.scss')
        .pipe(sass())
        .pipe(cssmin()) //兼容IE7及以下需设置compatibility属性 .pipe(cssmin({compatibility: 'ie7'}))
        .pipe(gulp.dest('./dist'));
});

gulp.task('scss', function () {
  gulp.watch('./scss/*.scss', ['sass']);
});