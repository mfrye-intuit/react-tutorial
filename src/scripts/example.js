
// Create a CommentBox component
var CommentBox = React.createClass({

  // The render method is called automatically
  // when the component is mounted to the DOM
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

// Finds the element with the id "content" and mounts the CommentBox on it
React.render(
  <CommentBox />,
  document.getElementById('content')
);
