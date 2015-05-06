var React = require('react');
var AuthorWatchApp = require('./components/AuthorWatchApp');


var Authors = [ 'John Grisham', 'Harlan Coben', 'Stephen King' ];

React.render(<AuthorWatchApp />, document.getElementById('app'));
