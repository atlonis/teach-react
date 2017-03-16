var React = require('react') ;

var Menuitem = React.createClass({
		getInitialState() {
			return{
				count:0
			}
		},
		handleclick(){
			this.setState({count: this.state.count +1});
			alert(this.state.count);
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
