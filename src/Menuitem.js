var React = require('react') ;

var Menuitem = React.createClass({
	  render: function() {
    return (
    	<li  className={this.props.item.className}>
    		<a href={this.props.item.href}>
    			<span>{this.props.item.title}</span>
    		</a>
    	</li>
    	)
}})

module.exports = Menuitem;
