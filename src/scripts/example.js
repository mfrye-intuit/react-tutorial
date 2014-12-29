var data = [
  {author: "Bruce Wayne", comment: "I am Batman."},
  {author: "Clark Kent", comment: "I am Clark Kent."}
];

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
})



React.render(
  <CommentBox data={data} />,
  document.getElementById('content')
);
