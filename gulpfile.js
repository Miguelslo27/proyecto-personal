const gulp = require('gulp');

/**
 * Task()
 * @param taskname: string
 * @param callback: function
 */
gulp.task('test', function (done) {
  console.log('Task test is running');
  done();
});

gulp.task('build', function () {
  // pipeline
  /* 
  var nombre = "Miguel"
  var nombres = ["Miguel", "Gaston", "Alejandro"];
   */
  return gulp
    .src([
      './**/*.html',
      '!./node_modules/**'
    ])
    .pipe(gulp.dest('./build'));
});