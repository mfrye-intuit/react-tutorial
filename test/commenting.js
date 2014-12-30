var React                 = require("react/addons");
var TestUtils             = React.addons.TestUtils;
var appDir                = "../src/scripts";

jest.dontMock('jquery');
jest.dontMock(appDir + '/commenting/comment-box');
jest.dontMock(appDir + '/commenting/comment-list');
jest.dontMock(appDir + '/commenting/comment');

var $  = require('jquery');
var CommentBox = require(appDir + '/commenting/comment-box');
var Comment = require(appDir + '/commenting/comment');
var API = require(appDir + '/api')

// Stub showdown global
window.Showdown = {
  converter: function() {
    this.makeHtml = function(data) {
      return data
    }
  }
};

var data = [
  {
    "author": "Bruce Wayne",
    "comment": "I am Batman."
  },
  {
    "author": "Clark Kent",
    "comment": "I am Clark Kent."
  }
];

describe('Commenting feature', function() {

  beforeEach(function() {
    spyOn(API, 'getComments').andCallFake(function (req) {
      var d = $.Deferred();
      d.resolve(data);
      return d.promise();
    });
  })

  it('should show a comment', function() {
    var author = "Bruce Wayne";
    var commentText = "I am Batman.";

    // Render a comment
    var comment = TestUtils.renderIntoDocument(
      <Comment author={author}>
        {commentText}
      </Comment>
    );

    // Find elements
    var header = TestUtils.findRenderedDOMComponentWithTag(comment, 'h2');
    var text = TestUtils.findRenderedDOMComponentWithTag(comment, 'span');

    expect(header.getDOMNode().textContent).toEqual(author);
    expect(text.getDOMNode().textContent).toEqual(commentText);
  });

  it('should render the comments', function() {
    // Render a commentBox
    var commentBox = TestUtils.renderIntoDocument(
      <CommentBox />
    );

    var comments = TestUtils.scryRenderedDOMComponentsWithClass(commentBox, 'comment');
    expect(comments.length).toEqual(2);
  });


});