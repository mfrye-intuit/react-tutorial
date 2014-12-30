
// 1. Here we removed the hardcoded comments array and setup the component
//    to call the server for data
var CommentBox = React.createClass({

  // 4. Props are owned by the parent while state can be managed by each individual component
  //    This function is automatically called when the component is instatiated and sets it's initial state
  //    This must always return an object
  getInitialState: function() {
    return {data: []};
  },

  // 5. This function is called once when the component is successfully mounted to the DOM
  //    This will kick off our component to get some data
  componentDidMount: function() {
    this._loadComments();
  },

  // 3. We've created a function to make an AJAX call for data using jQuery
  //    When the call is done it will set the component's state with the data
  //    Notice we've put a "_" in the front to help with readability and show
  //    separation between our custom methods and the default internal component methods
  _loadComments: function() {
    var _this = this;

    $.ajax({
      url: "/comments",
      dataType: 'json'
    })
    .done(function(data) {

      // Whenever the state is set it will re-render the component
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


// 2. Notice we removed the data prop
React.render(
  <CommentBox />,
  document.getElementById('content')
);
