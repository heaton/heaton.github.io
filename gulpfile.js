var gulp = require('gulp');
var less = require('gulp-less');

var workdir = 'week1/'
var paths = {
  less: workdir + 'less/**/*.less',
  css: workdir + 'css'
}

gulp.task('default', function() {
  console.log('hello world');
});

gulp.task('watch', function() {
  gulp.watch(paths.less, ['less']);
});

gulp.task('less', function() {
  return gulp.src(paths.less)
    .pipe(less())
    .pipe(gulp.dest(paths.css));
});
