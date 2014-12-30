var gulp        = require('gulp');
var react       = require('gulp-react');
var browserify  = require('browserify');
var reactify    = require('reactify');
var source      = require('vinyl-source-stream');

// 1. We've updated this task to run browserify and compile our app
//    from the entry point "app.js"
//
//    Before bundling the app, we run the transform function to convert
//    our JSX code into vanilla javascript
//
//    All the code will be bundled into a single file called "bundle.js"
gulp.task('js', function() {
  return browserify({
    entries: './src/scripts/app.js',
  })
    .transform(reactify)
    .bundle()
    .pipe(source('bundle.js'))
    .pipe(gulp.dest('./dist/scripts/'))
});

// 2. These tasks copy over the other files (css / html).
//    They are separated so we can do things later on, like
//    possibly adding LESS / SASS support.
gulp.task('css', function() {
  return gulp.src('./src/css/*')
    .pipe(gulp.dest('./dist/css'))
});

gulp.task('html', function() {
  return gulp.src('./src/index.html')
    .pipe(gulp.dest('./dist'))
});

// 3. The build task called via "gulp build"
gulp.task('build', ['js', 'css', 'html']);

// 4. This task will watch the javascript and rebuild the app
//    when changes are made
gulp.task('watch', function(){
  gulp.watch('./src/scripts/**/*', ['build'])
});

// 5. The default task called via plain "gulp"
gulp.task('default', ['build', 'watch']);