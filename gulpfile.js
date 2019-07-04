const gulp = require('gulp');
const browserSync = require('browser-sync');
const GulpFunctions = require('./gulp-functions');
const sass = require('gulp-sass');
const teddy = require('gulp-teddy');
const teddyConf = {
  setTemplateRoot: ''
};

gulp.task('build-html:dev', function () {
  return gulp
    .src('./src/**/*.html')
    .pipe(gulp.dest('./.temp'));
});

gulp.task('build-sass:dev', function () {
  return gulp
    .src('./src/scss/**/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('./.temp/css'));
});

gulp.task('build-statics:dev', function () {
  return gulp
    .src([
      './src/**/*.jpg',
      './src/**/*.jpeg',
      './src/**/*.png',
      './src/**/*.gif',
    ])
    .pipe(gulp.dest('./.temp/statics/images'));
});

gulp.task('build:dev', gulp.parallel(['build-html:dev', 'build-sass:dev', 'build-statics:dev']));

gulp.task('watch', gulp.series(['build:dev'], function (done) {
  gulp.watch('./src/**/*.html', gulp.series(['build:dev'])).on('change', browserSync.reload);
  gulp.watch('./src/scss/**/*.scss', gulp.series(['build:dev'])).on('change', browserSync.reload);
  done();
}));

gulp.task('serve', gulp.series(['watch'], function () {
  browserSync({
    server: {
      baseDir: ['.temp']
    }
  });
}));
