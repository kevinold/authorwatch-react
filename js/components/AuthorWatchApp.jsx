var React = require('react');
var AuthorList = require('./AuthorList');

var AuthorWatchApp = React.createClass({

  render: function() {
    return (
      <div className="col-md-12">

        <div className="row">
          <div className="col-md-4">
          <h2>AuthorWatch</h2>
          </div>
        </div>

        <div className="row">

          <div className="col-md-4">
            <AuthorList authors={this.props.authors} />
          </div>

          <div className="col-md-8">

          </div>

        </div>

      </div>
    );
  }

});

module.exports = AuthorWatchApp;
