
// Step 11 - Adding CommonJS (in this instance Browersify)
// -------------------------------------------------------
// 
// This file was getting rather large and it was becoming a challenge to read. Plus this file
// won't scale very well into a large scale app.
// So the common pattern in using React is to integrate CommonJS. CommonJS enables us
// to break up the files and reference each file as a module. This should look familar if you
// know NodeJs as it's built using CommonJS.

// CommonJS can be implemented in multiple ways for the browser, but in every case the files
// need to be collected and compiled before the app is ready to run in the browser. In this case
// we're using Browserify and implementing it during the gulp build process.

// This will help us breakup the code into components and make it easier to reference what we need.

// Check out updated gulpfile.js file to see how we add browserify. Then check out the new directory
// organization to see how the code has changed.
// See how we've created an entry point called "app.js". This is what browserify will reference
// when compiling our app and will pull in all the required files.

// See how for each file we require the modules we need for that file and then export the data we want
// to make public.


// Step 12 - Testing our app
// --------------------------
//
// Facebook has developed a great testing framwork called Jest that is based on Jasmine. It adds an
// an extra layer that makes it really easy to test your app.
//
// Go to /test/commenting.js to see how the tests are setup.
//
// Run the tests via calling "gulp test"
