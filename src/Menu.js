var React = require('react') ;
var Menuitem = require('./Menuitem') ;
var MenuitemGoPRO = require('./MenuitemGoPRO') ;

var Menu = React.createClass({
	propTypes:{
		links: React.PropTypes.arrayOf(React.PropTypes.shape({
			title:  React.PropTypes.string,
			href: React.PropTypes.string,
			className: React.PropTypes.oneOf(['list1','list2','list3'])
  }))
	},
  render: function() {
  	return (
				<ul className="menu" >
				  {this.props.links.map((item,index)=>{
				  if (index==3) return <MenuitemGoPRO item={item} key={index}/>
     	  	return	<Menuitem item={item} key={index} />
       	})}
	   		</ul>
  		    );
  }
});

module.exports =  Menu;

