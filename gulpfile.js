var gulp = require('gulp'),
connect = require('gulp-connect'),
vulcanize = require('gulp-vulcanize');

gulp.task('default', ['copy','vulcanize','server']);

gulp.task('server', function() {
  connect.server();
});

gulp.task('copy', function() {
  return gulp.src([
      'app/index.html',
      'app/bower_components/webcomponentsjs/webcomponents-lite.js'
    ],{
      base: 'app'
    })
    .pipe(gulp.dest('dist'));
});

gulp.task('vulcanize', function() {
  return gulp.src('app/elements/elements.html')
    .pipe(vulcanize({
      stripComments: true,
      inlineScripts: true,
      inlineCss: true
    }))
    .pipe(gulp.dest('dist/elements'))
});
