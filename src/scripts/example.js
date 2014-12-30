
// 1. Create a CommentBox component
var CommentBox = React.createClass({

  // 2. The render method is called automatically
  //    when the component is mounted to the DOM
  render: function() {

    // This XMLish looking formatting is called JSX.
    // It compiles to vanilla javascript via the included converter
    return (
      <div className="commentBox">
        Hello world!
      </div>
    );
  }
});

// 3. Finds the element with the id "content" and mounts the CommentBox on it
React.render(
  <CommentBox />,
  document.getElementById('content')
);


// Note: Right now we are using the browser based JSX converter included in index.html.
//       This works for temporarily for development, but we will want to precompile our app
//       for optimal performance when deploying.
//
//       We will set up our build process in the next step.
