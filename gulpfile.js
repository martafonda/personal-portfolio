var gulp = require('gulp'),
connect = require('gulp-connect');

gulp.task('default', ['webserver']);
gulp.task('default', function() {
  connect.server();
});
