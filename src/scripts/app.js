// The entry point of our app
//
// See how the CommentBox is now organized into the directory "commenting".
// This helps us organize code into their higher level features / components.

var React       = require('react');
var CommentBox  = require('./commenting/comment-box');


React.render(
  <CommentBox pollInterval={2000} />,
  document.getElementById('content')
);