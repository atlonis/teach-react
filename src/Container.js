var React = require('react') ;
var Menu = require('./Menu') ;

var Container = React.createClass({
propTypes:{
 links: React.PropTypes.array
	},
render: function() {
    return (
		<div  className="Container" >
			<div  className="cont-logo">
				<a  className="wrap-logo" href=""><span  className="logo"></span><span  className="logo-text"></span></a>
			</div>
				<Menu links={this.props.links}/>
		</div>
    );
  }
});

module.exports =  Container;

