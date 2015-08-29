/**
 * gulp file
 */
var gulp = require('gulp'),
    jshint = require('gulp-jshint'),
    gutil = require('gulp-util'),
    livereload = require('gulp-livereload'),
    webpack = require('webpack');

var webpackConfig = require('./webpack.config.js');

var myWebpackConfig = Object.create(webpackConfig);
var devCompiler = webpack(myWebpackConfig);

gulp.task('webpack', function(callback){
  devCompiler.run(function(err, stats) {
		if(err) throw new gutil.PluginError("webpack", err);
		gutil.log("[webpack]", stats.toString({
			colors: true
		}));
		callback();
	});
});

gulp.task('watch', function() {
  gulp.watch('./app/**/*.*', ['webpack']);
});
