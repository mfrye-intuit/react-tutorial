
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

// 2. Notice we've hardcoded a few comments here for demonstration purposes.
//    Also notice the props that we've given each Comment.
//
//    We are defining author / comment props and passing it a value
var CommentList = React.createClass({
  render: function() {
    return (
      <div className="commentList">
        <Comment author="Bruce Wayne" comment="I am Batman." />
        <Comment author="Clark Kent" comment="I am Clark Kent." />
      </div>
    )
  }
});

var CommentForm = React.createClass({
  render: function() {
    return (
      <div className="commentForm">
        Hello world! I am a CommentForm.
      </div>
    )
  }
});

// 1. This is our new component that will be the actual comment.
//    "this.props" references the properties (or props) passed in when this component is created.
//
//    We want the author prop to go in the header and the comment prop in the body
var Comment = React.createClass({
  render: function() {
    return (
      <div className="comment">
        <h2 className="commentAuthor">
          {this.props.author}
        </h2>
        {this.props.comment}
      </div>
    )
  }
});



React.render(
  <CommentBox />,
  document.getElementById('content')
);
