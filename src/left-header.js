var React = require('react') ;
var Menu = require('./appMenu') ;

var container = React.createClass({
  render: function() {
    return (
		<div  className="container">
			<div  className="cont-logo">
				<a  className="wrap-logo" href=""><span  className="logo"></span><span  className="logo-text"></span></a>
			</div>
				<Menu />
		</div>
    );
  }
});

module.exports =  container;
