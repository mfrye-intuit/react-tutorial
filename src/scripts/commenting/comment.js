// The Comment component
//
// Build a comment showing the author and comment text
// Comment text can use html markdown

var React       = require('react');

var Comment = React.createClass({
  render: function() {
    // References the Showdown variable in the global scope on the window object
    // The script is added in the index.html file
    var converter   = new Showdown.converter();
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
});

module.exports = Comment;