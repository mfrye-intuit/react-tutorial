var React                 = require("react/addons");
var TestUtils             = React.addons.TestUtils;
var appDir                = "../src/scripts";

jest.dontMock(appDir + '/commenting/comment');

describe('Commenting feature', function() {

  describe('Comment', function() {
    
    var Comment = require(appDir + '/commenting/comment');


    it('should show a comment', function() {
      var author = "Bruce Wayne";
      var text = "I am Batman.";

      // Render a checkbox with label in the document
      var comment = TestUtils.renderIntoDocument(
        <Comment author={author}>
          {text}
        </Comment>
      );

      // Verify that it's Off by default
      var header = TestUtils.findRenderedDOMComponentWithTag(
      checkbox, 'h2');
      expect(header.getDOMNode().textContent).toEqual(author);
    });
  });
});