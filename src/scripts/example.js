
// 3. CommentBox now contains the new CommentList and 
//    CommentForm components
var CommentBox = React.createClass({
  render: function() {
    return (
      <div className="commentBox">
        <h1>Comments</h1>
        <CommentList />
        <CommentForm />
      </div>
    );
  }
});

// 1. This is our new component that
//    will hold our created comments
var CommentList = React.createClass({
  render: function() {
    return (
      <div className="commentList">
        Hello world! I am a CommentList.
      </div>
    )
  }
});

// 2. This is our new component that
//    will be the form for creating new comments
var CommentForm = React.createClass({
  render: function() {
    return (
      <div className="commentForm">
        Hello world! I am a CommentForm.
      </div>
    )
  }
});

React.render(
  <CommentBox />,
  document.getElementById('content')
);
