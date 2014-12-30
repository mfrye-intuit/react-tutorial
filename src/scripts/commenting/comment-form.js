var React       = require('react');


var CommentForm = React.createClass({
  _handleSubmit: function(e) {
    e.preventDefault();

    console.log('test')

    var author = this.refs.author.getDOMNode().value.trim();
    var comment = this.refs.comment.getDOMNode().value.trim();

    if (!comment || !author) {
      return;
    }

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
          <textarea type="text" className="form-control" placeholder="Your comment..." ref="comment"></textarea>
        </div>

        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    )
  }
});

module.exports = CommentForm;