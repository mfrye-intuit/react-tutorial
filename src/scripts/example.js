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

// 1. Here we've built out our form
var CommentForm = React.createClass({

  // 3. When the form is submitted it creates and event (e)
  _handleSubmit: function(e) {
    // First we prevent the browser default action from being triggered
    e.preventDefault();

    // Then we collected the values using the ref attribute of the DOM element
    var author = this.refs.author.getDOMNode().value.trim();
    var comment = this.refs.comment.getDOMNode().value.trim();

    // If either value is not defined, stop
    if (!comment || !author) {
      return;
    }

    // Here is where we will put the actual adding of the new comment
    // TODO: Add to CommentsList and post to server

    // We then clear out the inputs
    this.refs.author.getDOMNode().value = '';
    this.refs.comment.getDOMNode().value = '';
  },

  // 2. We've added two inputs for the author and the comment,
  //    and a button to submit the data.
  //    We've also added the attribute defining which function to call
  //    when the submit button is pressed.
  //    We've also added some extra elements for styling using bootstrap.
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
