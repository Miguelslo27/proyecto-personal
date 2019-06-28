const gulp = require('gulp');
const browserSync = require('browser-sync');

/**
 * Task()
 * @param taskname: string
 * @param callback: function
 *
 * OLD Version gulp.task('nombre', ['dependencia1', 'dependencia2'], callback) @return void
 * NEW Version gulp.task('nombre', callback) @return void
 * gulp.series(['d1', 'd2'], callback) @return function
 * gulp.parallel(['d1', 'd2'], callback) @return function
 */
gulp.task('test', function (done) {
  console.log('Task test is running');
  done();
});

gulp.task('build:dev', function () {
  // pipeline''
  /*
  var nombre = "Miguel"
  var nombres = ["Miguel", "Gaston", "Alejandro"];
   */
  return gulp
    .src('./src/**/*.html')
    .pipe(gulp.dest('./.temp'));
});

gulp.task('watch', gulp.series(['build:dev'], function (done) {
  gulp.watch('./src/**/*.html', gulp.series(['build:dev'])).on('change', browserSync.reload);
  done();
}));

gulp.task('serve', function () {
  browserSync({
    server: {
      baseDir: ['.temp']
    }
  });
});