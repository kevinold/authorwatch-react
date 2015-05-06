var React = require('react');

var AuthorWatchApp = React.createClass({

  render: function() {
    var authorList = [];

    this.props.authors.map(function(author, i) {
      authorList.push(author)
    });

    return (
      <div className="list-group">
      {authorList}
      </div>
    );
  }

});

module.exports = AuthorWatchApp;
