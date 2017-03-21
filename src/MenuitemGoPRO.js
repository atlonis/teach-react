var React = require('react') ;
var Menuitem = require('./Menuitem') ;

var MenuitemGoPro = React.createClass({
	handleclick(){
		console.log(this.props.item);
	},
	  render: function() {
    return (
    	<li  className={this.props.item.classNamelist}>
    		<a href={this.props.item.href} onClick={this.handleclick}>
    			<span className={this.props.item.classNamebutton}>
    				<span className={this.props.item.classNameicon}></span>
    				<span className={this.props.item.classNametitle}>{this.props.item.title}</span>
    			</span>
    		</a>
    	</li>
    	)
}})

module.exports = MenuitemGoPro;
