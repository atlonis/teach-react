var React = require('react') ;
var Menuitem = require('./Menuitem') ;

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
     	  	return	<Menuitem item={item} key={index} />
       	})}
				 <li className="list4">
					<a href="">
						<span className="pro-button">
							<span className="icon"></span>
							<span className="pro">Go Pro</span>
						</span>
					</a>
				</li>
	   		</ul>
  		    );
  }
});

module.exports =  Menu;

