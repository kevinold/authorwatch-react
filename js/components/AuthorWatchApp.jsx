var React = require('react');
var AuthorList = require('./AuthorList');

var AuthorWatchApp = React.createClass({
  getInitialState: function() {
    return {
      selectedAuthor: undefined
    };
  },

  handleSelectedAuthor: function(selectedAuthor){
    this.setState({ selectedAuthor: selectedAuthor });
  }, 

  render: function() {
    return (
      <div className="col-md-12">

        <div className="row">
          <div className="col-md-4">
            <h2>AuthorWatch</h2> {this.state.selectedAuthor}
          </div>
        </div>

        <div className="row">

          <div className="col-md-4">
            <AuthorList authors={this.props.authors} selectedAuthorCallback={this.handleSelectedAuthor} />
          </div>

          <div className="col-md-8">

          </div>

        </div>

      </div>
    );
  }

});

module.exports = AuthorWatchApp;
