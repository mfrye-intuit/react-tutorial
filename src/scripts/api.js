
var API = {
  getComments: function() {
    return $.ajax({
      url: "/comments",
      dataType: 'json'
    });
  },

  addComment: function(data) {
    return $.ajax({
      url: "/comments",
      dataType: 'json',
      type: 'POST',
      data: data
    });
  }
};

module.exports = API;