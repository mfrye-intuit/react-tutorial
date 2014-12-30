
// Nothing new added in this file.

// In this step we are setting up our build process to precompile the JSX,
// so we won't need to do it in the browser.
//
// We are using gulp as our build system, which is similar to grunt if you 
// are familiar with that. Gulp enables us to create tasks to build / optimize
// our frontend code for the browser.

// Check out gulpfile.js to see our new build process

var CommentBox = React.createClass({
  render: function() {
    return (
      <div className="commentBox">
        Hello world!
      </div>
    );
  }
});

React.render(
  <CommentBox />,
  document.getElementById('content')
);
