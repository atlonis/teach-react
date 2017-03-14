var React = require('react') ;
var Container = require('./Containder') ;

var App = React.createClass({
  render: function() {
    return (
    	<div  className="wrap">
    		<Container />
			</div>
    );
  }
});
module.exports =  App;

