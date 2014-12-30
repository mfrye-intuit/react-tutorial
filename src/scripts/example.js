
// 1. Here we've abstracted the server call to an external API object
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

  // 3. We've updated this function to continue calling _loadComments
  //    every couple seconds, defined by the prop pollInterval.
  //    Whenever _loadComments is called it will set the state with the new values
  //    received and re-render the component
  componentDidMount: function() {
    this._loadComments();
    setInterval(this._loadComments, this.props.pollInterval);
  },

  // 2. We've updated this function to call the API object instead
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


// 4. Notice we've added the prop pollInterval with the value 2000
//    We want the component to recall the the server every 2 seconds
React.render(
  <CommentBox pollInterval={2000} />,
  document.getElementById('content')
);
