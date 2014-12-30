var API = {
  getComments: function() {
    return $.ajax({
      url: "/comments",
      dataType: 'json'
    });
  },

  // 2. Here is the new API method we've added
  addComment: function(data) {
    return $.ajax({
      url: "/comments",
      dataType: 'json',
      type: 'POST',
      data: data
    });
  }
};

var CommentBox = React.createClass({
  getInitialState: function() {
    return {data: []};
  },

  componentDidMount: function() {
    this._loadComments();
    setInterval(this._loadComments, this.props.pollInterval);
  },

  _loadComments: function() {
    var _this = this;

    API.getComments()
    .done(function(data) {
      _this.setState({data: data});
    })
    .error(function() {
      console.log('Error!')
    });
  },

  // 1. We've now added a new function for handling the creation of a new comment
  //    It calls the new API method we've added and sets the state when it's done
  _handleCommentSubmit: function(comment) {
    var _this = this;

    API.addComment(comment)
    .done(function(data) {
      _this.setState({data: data});
    })
    .error(function() {
      console.log('Error!')
    });
  },

  // 3. Notice we've created a new prop for the CommentForm called submitComment
  //    and passed the _handleCommentSubmit function to it
  render: function() {
    return (
      <div className="commentBox">
        <h1>Comments</h1>
        <CommentList data={this.state.data} />
        <CommentForm submitComment={this._handleCommentSubmit} />
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
  _handleSubmit: function(e) {
    e.preventDefault();

    var author = this.refs.author.getDOMNode().value.trim();
    var comment = this.refs.comment.getDOMNode().value.trim();

    if (!comment || !author) {
      return;
    }

    // 4. We can now call the passed in function to handle the new comment creation
    //    We pass in the values for new comment
    this.props.submitComment({author: author, comment: comment})

    this.refs.author.getDOMNode().value = '';
    this.refs.comment.getDOMNode().value = '';
  },

  render: function() {
    return (
      <form className="commentForm" onSubmit={this._handleSubmit}>
        <div className="form-group">
          <input type="text" className="form-control" placeholder="Your name" ref="author" />
        </div>

        <div className="form-group">
          <input type="text" className="form-control" placeholder="Your comment..." ref="comment" />
        </div>

        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
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
  <CommentBox pollInterval={2000} />,
  document.getElementById('content')
);
