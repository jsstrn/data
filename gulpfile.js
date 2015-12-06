var gulp = require('gulp');
var jade = require('gulp-jade');

gulp.task('default', function() {
  gulp.src('./views/index.jade')
    .pipe(jade({
      pretty: true
    }))
    .pipe(gulp.dest('./'))

  gulp.src('./views/graphs/**/*.jade')
    .pipe(jade({
      pretty: true
    }))
    .pipe(gulp.dest('./dataset'))
});
