var React = require('react') ;
var Menuitem = require('./Menuitem') ;
var MenuitemGoPRO = require('./MenuitemGoPRO') ;

var Menu = React.createClass({
	propTypes:{
		links: React.PropTypes.arrayOf(React.PropTypes.shape({
			title:  React.PropTypes.string.isRequired,
			href: React.PropTypes.string.isRequired,
			className: React.PropTypes.oneOf(['list1','list2','list3'])
  })),
		count: React.PropTypes.shape({
			link1:React.PropTypes.number.isRequired,
			link2:React.PropTypes.number.isRequired,
			link3:React.PropTypes.number.isRequired
			})},
  render: function() {
  	return (
				<ul className="menu"  >
				  {this.props.links.map((item,index)=>{
				  if (index==3) return <MenuitemGoPRO item={item} key={index}/>
     	  	return	<Menuitem item={item} key={index} handleclick={this.props.handleclick} />
       	})}
	   		</ul>
  		    );
  }
});

module.exports =  Menu;


