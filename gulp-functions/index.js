const gulp = require('gulp');

function transferHTMLFiles() {
  // pipeline
  /*
  var nombre = "Miguel"
  var nombres = ["Miguel", "Gaston", "Alejandro"];
   */
  return gulp
    .src('./src/**/*.html')
    .pipe(gulp.dest('./.temp'));
}

const GulpFunctions = {
  transferHTMLFiles
}

module.exports = GulpFunctions;
