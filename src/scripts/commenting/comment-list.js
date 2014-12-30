
// The CommentList Component
//
// This is the list holding created comments
// using the Comment component

var React       = require('react');
var Comment     = require('./comment');


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

module.exports = CommentList;