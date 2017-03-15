var React = require('react') ;
var Header = require('./Header') ;
var Footer = require('./Footer') ;
var Content = require('./Content') ;

var App = React.createClass({
  render: function() {
    return (
    	<div>
  		<Header/>
  		<Content/>
  		<Footer/>
  		</div>
    );
  }
});

module.exports =  App;

