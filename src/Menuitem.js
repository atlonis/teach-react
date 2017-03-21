var React = require('react') ;
var MenuitemGoPro = require('./MenuitemGoPRO') ;

var Menuitem = React.createClass({
	propTypes:{
		item: React.PropTypes.shape({
			title:  React.PropTypes.string.isRequired,
			href: React.PropTypes.string.isRequired,
			className: React.PropTypes.oneOf(['list1','list2','list3'])
		})
	},
	handleclick(){
		this.props.handleclick(this.props.item.id)
	},
	  render: function() {
	  	console.log('[MenuItem] render');
    return (
    	<li  className={this.props.item.className}>
    		<a href={this.props.item.href} onClick={this.handleclick}>
    			<span >{this.props.item.title}</span>
    		</a>
    		<div className='imageCounter'>
          <div className='count'>{this.props.count}</div>
        </div>
    	</li>
    	)
}})

module.exports = Menuitem;
