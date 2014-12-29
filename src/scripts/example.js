var API = {
  getComments: function() {
    return $.ajax({
      url: "/comments",
      dataType: 'json'
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

  render: function() {
    return (
      <div className="commentBox">
        <h1>Comments</h1>
        <CommentList data={this.state.data} />
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
  <CommentBox pollInterval={2000} />,
  document.getElementById('content')
);
