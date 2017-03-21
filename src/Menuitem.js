var React = require('react') ;
var MenuitemGoPro = require('./MenuitemGoPRO') ;

var Menuitem = React.createClass({
	handleclick(){
		this.props.handleclick(this.props.item.id)
	},
	  render: function() {
    return (
    	<li  className={this.props.item.className}>
    		<a href={this.props.item.href} onClick={this.handleclick}>
    			<span >{this.props.item.title}</span>
    		</a>
    	</li>
    	)
}})

module.exports = Menuitem;
