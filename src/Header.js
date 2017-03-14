var React = require('react') ;
var Container = require('./Container') ;

var header = React.createClass({
  render: function() {
    return (
    	<div className='header'><Container/></div>
    	)}
  });
module.exports =  header;
