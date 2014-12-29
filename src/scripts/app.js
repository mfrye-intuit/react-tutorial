var React       = require('React');
var CommentBox  = require('./commenting/comment-box');


React.render(
  <CommentBox pollInterval={2000} />,
  document.getElementById('content')
);