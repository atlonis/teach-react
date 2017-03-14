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

var Menu = React.createClass({
  render: function() {
  	var links = [
  	{
  		title: 'Home',
  		href:'',
  		className:'list1'
  	},
  	{
  		title: 'dsad',
  		href:'',
  		className:'list2'
  	},
  	{
  		title: 'Сourses',
  		href:'',
  		className:'list3'
  	}
  	]
  	return (
				<ul className="menu" >
				  {links.map((item,index)=>{
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

