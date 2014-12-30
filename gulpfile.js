var gulp        = require('gulp');
var react       = require('gulp-react');
var browserify  = require('browserify');
var reactify    = require('reactify');
var source      = require('vinyl-source-stream');
var shell       = require('gulp-shell');

// We've updated this task to run browserify and compile our app
// from the entry point "app.js"
//
// Before bundling the app, we run the transform function to convert
// our JSX code into vanilla javascript
//
// All the code will be bundled into a single file called "bundle.js"
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

// Main testing tasks
// This can be called via "jest" on the cli if jest is installed globally
gulp.task('test', shell.task([
  './node_modules/jest-cli/bin/jest.js test'
]));

gulp.task('build', ['js', 'css', 'html']);

gulp.task('default', ['build'])