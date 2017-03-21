var React = require('react') ;
var Menuitem = require('./Menuitem') ;
var MenuitemGoPRO = require('./MenuitemGoPRO') ;

var Menu = React.createClass({
	propTypes:{
			count: React.PropTypes.shape({
			link1:React.PropTypes.number.isRequired,
			link2:React.PropTypes.number.isRequired,
			link3:React.PropTypes.number.isRequired
		})},
  render: function() {
  	console.log('[Menu] render');
  	return (
				<ul className="menu"  >
				  {this.props.links.map((item,index)=>{
				  if (index==3) return <MenuitemGoPRO item={item} key={index}/>
			return	<Menuitem count={this.props.count['link'+(index+1)] } item={item} key={index} handleclick={this.props.handleclick} />
       	})}
	   		</ul>
  		    );
  }
});

module.exports =  Menu;


