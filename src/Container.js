var React = require('react') ;
var Menu = require('./Menu') ;

var Container = React.createClass({

render: function() {
			console.log('[Container] render');
    return (
		<div  className="Container" >
			<div  className="cont-logo">
				<a  className="wrap-logo" href=""><span  className="logo"></span><span  className="logo-text"></span></a>
			</div>
				<Menu links={this.props.links} count={this.props.count} handleclick={this.props.handleclick}/>
		</div>
    );
  }
});

module.exports =  Container;

