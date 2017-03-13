var React = require('react') ;
var container = require('./left-header') ;

var App = React.createClass({
  render: function() {
    return (
    	<div  className="wrap">
    		<container />
			</div>
    );
  }
});
module.exports =  App;
