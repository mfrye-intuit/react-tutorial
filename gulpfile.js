var gulp        = require('gulp');
var react       = require('gulp-react');

gulp.task('js', function() {
  return gulp.src('./src/scripts/example.js')
    .pipe(react({harmony: true}))
    .pipe(gulp.dest('./dist/scripts'));
});

gulp.task('css', function() {
  return gulp.src('./src/css/*')
    .pipe(gulp.dest('./dist/css'))
});

gulp.task('html', function() {
  return gulp.src('./src/index.html')
    .pipe(gulp.dest('./dist'))
});

gulp.task('build', ['js', 'css', 'html']);