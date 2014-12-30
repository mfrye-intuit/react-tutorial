
// Let's make things interesting!

// 1. We've added an external file called Showdown, which enables us
//    to use markdown in our input.
//
//    Here we create a new instance of the converter
var converter = new Showdown.converter();

var API = {
  getComments: function() {
    return $.ajax({
      url: "/comments",
      dataType: 'json'
    });
  },

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

  _handleCommentSubmit: function(comment) {
    var _this = this;
    var comments = this.state.data;
    var newComments = comments.concat([comment]);
    this.setState({data: newComments});

    API.addComment(comment)
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
        <CommentForm submitComment={this._handleCommentSubmit} />
      </div>
    );
  }
});

// 2. We've changed the syntax of the Comment component to where we assign
//    the comment data as children of the component.
//    This enables us to have multiple elements in the comment text if desired.
var CommentList = React.createClass({
  render: function() {
    var comments = this.props.data.map(function (comment) {
      return (
        <Comment author={comment.author}>
          {comment.comment}
        </Comment>
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

    this.props.submitComment({author: author, comment: comment})

    this.refs.author.getDOMNode().value = '';
    this.refs.comment.getDOMNode().value = '';
  },

  // We've also switched out the comment input for a textarea
  // to provide more room for markup.
  render: function() {
    return (
      <form className="commentForm" onSubmit={this._handleSubmit}>
        <div className="form-group">
          <input type="text" className="form-control" placeholder="Your name" ref="author" />
        </div>

        <div className="form-group">
          <textarea type="text" className="form-control" placeholder="Your comment..." ref="comment"></textarea>
        </div>

        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    )
  }
});

// 3. Here we've changed the code to reference this.props.children.
//    This is similar to "transclusion" if you're familar with AngularJs.
//
//    Basically we're referencing all the children elements passed in,
//    converting the string using Showdown, then pass the rawMarkup to the element.
//
//    React has a built in safeguard to protect against malicious code being executed.
//    So in order to bypass this, we use the attribute called "dangerouslySetInnerHTML"
//    where we want the html to appear. Just make sure you know the source of the code,
//    and it's safe to run!
var Comment = React.createClass({
  render: function() {
    var rawMarkup = converter.makeHtml(this.props.children.toString());

    return (
      <div className="comment">
        <h2 className="commentAuthor">
          {this.props.author}
        </h2>
        <span dangerouslySetInnerHTML={{__html: rawMarkup}} />
      </div>
    )
  }
})



React.render(
  <CommentBox pollInterval={2000} />,
  document.getElementById('content')
);
