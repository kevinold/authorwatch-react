var React = require('react');
var AuthorWatchApp = require('./components/AuthorWatchApp');


var Authors = [ 'John Grisham', 'Harlan Coben', 'Stephen King' ];

React.render(<AuthorWatchApp authors={Authors} />, document.getElementById('app'));
