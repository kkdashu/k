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

var webpackConfig = Object.create(require('./webpack.config.js')),
    compiler = webpack(webpackConfig);

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
  gulp.watch(['./src/*.js', './test/*.js'], ['mocha_test']);
});

gulp.task('mocha_test', function() {
    gulp.src('./test/*.js')
        .pipe(mocha())
        .once('error', function(e) {
          console.log(e);
        });
});

gulp.task('default', ['connect', 'watch']);

gulp.task('test', ['mocha_test', 'watch_test']);
