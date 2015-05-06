var React = require('react');
var Author = require('./Author');

var AuthorWatchApp = React.createClass({

  render: function() {
    var authorList = [];

    this.props.authors.map(function(author, i) {
      authorList.push(<Author name={author} key={i} />)
    });

    return (
      <div className="list-group">
      {authorList}
      </div>
    );
  }

});

module.exports = AuthorWatchApp;
