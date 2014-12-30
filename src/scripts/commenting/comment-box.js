var React       = require('react');
var API         = require('../api');
var CommentList = require('./comment-list');
var CommentForm = require('./comment-form');


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
    .fail(function() {
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
    .fail(function() {
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

module.exports = CommentBox;