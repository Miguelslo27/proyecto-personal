const gulp = require('gulp');
const browserSync = require('browser-sync');
const GulpFunctions = require('./gulp-functions');
const sass = require('gulp-sass');
const image = require('gulp-image');
const teddy = require('gulp-teddy');
const minifyInline = require('gulp-minify-inline');
const teddyConf = {
  setTemplateRoot: 'src/teddy-templates',
  compileAtEveryRender: true
};
teddy.settings(teddyConf);

gulp.task('build-html:dev', function () {
  return gulp
    .src('./src/**/*.html')
    .pipe(teddy.compile())
    .pipe(gulp.dest('./.temp'));
});

gulp.task('build-html:prod', function () {
  return gulp
    .src('./src/**/*.html')
    .pipe(teddy.compile())
    .pipe(gulp.dest('./build'));
});

gulp.task('build-sass:dev', function () {
  return gulp
    .src('./src/scss/**/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('./.temp/css'));
});

gulp.task('build-sass:prod', function () {
  return gulp
    .src('./src/scss/**/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('./build/css'));
});

gulp.task('build-statics:dev', function () {
  return gulp
    .src([
      './src/**/*.jpg',
      './src/**/*.jpeg',
      './src/**/*.png',
      './src/**/*.gif',
    ])
    .pipe(image())
    .pipe(gulp.dest('./.temp/statics/images'));
});

gulp.task('build-statics:prod', function () {
  return gulp
    .src([
      './src/**/*.jpg',
      './src/**/*.jpeg',
      './src/**/*.png',
      './src/**/*.gif',
    ])
    .pipe(image())
    .pipe(gulp.dest('./build/statics/images'));
});

gulp.task('build-js:dev', function () {
  return gulp
    .src([
      './src/**/*.js'
    ])
    .pipe(gulp.dest('./.temp'));
});

gulp.task('build-js:prod', function () {
  return gulp
    .src([
      './src/**/*.js'
    ])
    .pipe(minifyInline())
    .pipe(gulp.dest('./build'));
});

gulp.task('build:dev', gulp.parallel(['build-html:dev', 'build-sass:dev', 'build-statics:dev', 'build-js:dev']));
gulp.task('build:prod', gulp.parallel(['build-html:prod', 'build-sass:prod', 'build-statics:prod', 'build-js:prod']));

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
