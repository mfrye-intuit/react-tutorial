var gulp        = require('gulp');
var react       = require('gulp-react');
var browserify  = require('browserify');
var reactify    = require('reactify');
var source      = require('vinyl-source-stream');

gulp.task('js', function() {
  return browserify({
    entries: './src/scripts/app.js',
  })
    .transform(reactify)
    .bundle()
    .pipe(source('bundle.js'))
    .pipe(gulp.dest('./dist/scripts/'))
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