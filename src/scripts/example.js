
// 1. Here is some sample data we want to pass into the component
var data = [
  {author: "Bruce Wayne", comment: "I am Batman."},
  {author: "Clark Kent", comment: "I am Clark Kent."}
];

// 3. The data is then passed down to the CommentList component
var CommentBox = React.createClass({
  render: function() {
    return (
      <div className="commentBox">
        <h1>Comments</h1>
        <CommentList data={this.props.data} />
        <CommentForm />
      </div>
    );
  }
});

// 4. Here we reference the passed in data and iterate through it
//    creating a new Comment component for each comment in the array
//    We then reference the array of comment components via {comments}
var CommentList = React.createClass({
  render: function() {
    var comments = this.props.data.map(function (comment) {
      return (
        <Comment author={comment.author} comment={comment.comment} />
      )
    });

    return (
      <div className="commentList">
        {comments}
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


// 2. Here we are passing in the data as the prop data
React.render(
  <CommentBox data={data} />,
  document.getElementById('content')
);
