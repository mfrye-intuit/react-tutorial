var gulp        = require('gulp');
var react       = require('gulp-react');

// This task compiles the JSX into raw javascript 
// and puts the finished code into the /dist folder
gulp.task('js', function() {
  return gulp.src('./src/scripts/example.js')
    .pipe(react({harmony: true}))
    .pipe(gulp.dest('./dist/scripts'));
});

// These tasks copy over the other files (css / html).
// They are separated so we can do things later on, like
// possibly adding LESS / SASS support.
gulp.task('css', function() {
  return gulp.src('./src/css/*')
    .pipe(gulp.dest('./dist/css'))
});

gulp.task('html', function() {
  return gulp.src('./src/index.html')
    .pipe(gulp.dest('./dist'))
});

// The build task called via "gulp build"
gulp.task('build', ['js', 'css', 'html']);

// The default task called via plain "gulp"
gulp.task('default', ['build']);