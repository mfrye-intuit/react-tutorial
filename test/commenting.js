// Tests for the Commenting feature
//

// Here we require a special version of react that includes extra features from the default.
// Here we want the TestUtils object.
var React                 = require("react/addons");
var TestUtils             = React.addons.TestUtils;
var appDir                = "../src/scripts";

var $, CommentBox, Comment, API, data;

// Jest automatically mocks every module to make testing easier.
// So to actually test the logic of the module we want to test,
// we have to tell jest not to mock this module.

// We want jQuery here to mock the AJAX calls
jest.dontMock('jquery');

// We don't want any of these modules mocked as we will be testing them
// in this file
jest.dontMock(appDir + '/commenting/comment-box');
jest.dontMock(appDir + '/commenting/comment-list');
jest.dontMock(appDir + '/commenting/comment');

// Here we require the modules we want
// This makes it easy to isolate the modules we want to test
$             = require('jquery');
CommentBox    = require(appDir + '/commenting/comment-box');
Comment       = require(appDir + '/commenting/comment');
API           = require(appDir + '/api');

// Here we are stubbing the Showdown global variable
// as it isn't available in the test environment
window.Showdown = {
  converter: function() {
    this.makeHtml = function(data) {
      return data
    }
  }
};

// Here is the sample data we are going to use for our tests
data = [
  {
    "author": "Bruce Wayne",
    "comment": "I am Batman."
  },
  {
    "author": "Clark Kent",
    "comment": "I am Clark Kent."
  }
];


// Our tests...
describe('Commenting feature', function() {

  // Here we are stubbing the AJAX call to API.getComments for each test
  // We create a new promise and return that with the data to simulate
  // a successful call.
  beforeEach(function() {
    spyOn(API, 'getComments').andCallFake(function (req) {
      var d = $.Deferred();
      d.resolve(data);
      return d.promise();
    });
  })

  it('should show a comment', function() {
    var header, test;

    // Use the first comment in the data for our test
    var newComment = data[0];

    // Render a comment
    var comment = TestUtils.renderIntoDocument(
      <Comment author={newComment.author}>
        {newComment.comment}
      </Comment>
    );

    // Find elements on the DOM
    header = TestUtils.findRenderedDOMComponentWithTag(comment, 'h2');
    text = TestUtils.findRenderedDOMComponentWithTag(comment, 'span');

    // Expect that the render content on the DOM
    // matches the data we passed in
    expect(header.getDOMNode().textContent).toEqual(newComment.author);
    expect(text.getDOMNode().textContent).toEqual(newComment.comment);
  });


  it('should render the comments', function() {
    // Render a commentBox
    var commentBox = TestUtils.renderIntoDocument(
      <CommentBox />
    );

    // Find the comments on the DOM by searching for all elements with the comment class
    var comments = TestUtils.scryRenderedDOMComponentsWithClass(commentBox, 'comment');

    // Expect that the number of comments rendered
    // is equal to the number of comments we passed in.
    expect(comments.length).toEqual(data.length);
  });


});