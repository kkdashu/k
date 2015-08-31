/**
 * gulp file
 */
var gulp = require('gulp'),
    jshint = require('gulp-jshint'),
    gutil = require('gulp-util'),
    connect = require('gulp-connect'),
    livereload = require('gulp-livereload'),
    webpack = require('webpack'),
    mocha = require('gulp-mocha');

var webpackConfig = require('./webpack.config.js'),
    compiler = Object.create(webpackConfig);

gulp.task('webpack', function(callback) {
  compiler.run(function(err, stats) {
		if(err) throw new gutil.PluginError("webpack", err);
		gutil.log("[webpack]", stats.toString({
			colors: true
		}));
		callback();
	});
})

gulp.task('connect', function() {
  connect.server({
    root: './',
    port: 9100,
    livereload: true
  });
});

gulp.task('watch', function() {
  gulp.watch('./app/**/*.*', ['webpack']);
});

gulp.task('watch_test', function() {
  gulp.watch(['./app/scripts/lib/*.js', './test/*.js'], ['mocha_test']);
});

gulp.task('mocha_test', function() {
  try{
    gulp.src('./test/*.js')
      .pipe(mocha());
  } catch(err) {
    gutil.log('[test]', err);
  }
});

gulp.task('default', ['connect', 'watch']);

gulp.task('test', ['watch_test']);
