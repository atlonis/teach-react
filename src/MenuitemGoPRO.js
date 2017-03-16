var React = require('react') ;

var MenuitemGoPro = React.createClass({
	  render: function() {
    return (
    	<li  className={this.props.item.classNamelist}>
    		<a href={this.props.item.href}>
    			<span className={this.props.item.classNamebutton}>
    				<span className={this.props.item.classNameicon}></span>
    				<span className={this.props.item.classNametitle}>{this.props.item.title}</span>
    			</span>
    		</a>
    	</li>
    	)
}})

module.exports = MenuitemGoPro;
