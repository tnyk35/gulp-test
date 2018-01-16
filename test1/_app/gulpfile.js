var
  gulp = require('gulp'),
  pug = require('gulp-pug');

gulp.task('default', pugTask);

function pugTask(done) {
  gulp.src('./src/**/*.pug')
    .pipe(pug({
      pretty: true
    }))
    .pipe(gulp.dest('../'));
  done();
}
