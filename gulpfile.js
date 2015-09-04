var gulp = require('gulp');
var webpack = require('gulp-webpack');
var jshint = require('gulp-jshint');
var mocha = require('gulp-mocha');

gulp.task('jshint', function() {
  return gulp.src(['*.js', 'app/**/*.js'])
})

gulp.task('test', function() {
  return gulp.src('./tests/test.js')
      .pipe(mocha());
});

gulp.task('webpackdev', function() {
  return gulp.src('./app/**/*.js')
             .pipe(webpack({
               output: {
                 filename: 'bundle.js'
               }
             }))
             .pipe(gulp.dest('./public/'));
});

gulp.task('copy', function() {
  return gulp.src(['./app/**/*.html', './app/**/*.css'])
             .pipe(gulp.dest('./public/'));
});

gulp.task('watch', ['build'], function() {
  gulp.watch(['app/**/*.js', '*.js', '*.css'], ['build', 'jshint']);
  gulp.watch(['app/**/*.html', 'app/**/*.css'], ['copy']);
});


gulp.task('build', ['copy', 'webpackdev']);
