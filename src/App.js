var React = require('react') ;
var Container = require('./appCont') ;

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
