
var CommentBox = React.createClass({
  render: function() {
    return (
      <div className="commentBox">
        Hello world!
      </div>
    );
  }
});

React.render(
  <CommentBox />,
  document.getElementById('content')
);
