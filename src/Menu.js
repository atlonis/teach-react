var React = require('react') ;

var Menulist = React.createClass({
  render: function() {
    return (
      <ul className="menu" >
       	{this.props.data.map((item,index)=>{
     	  	return	<Menuitem item={item} key={index}/>
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
}});

var Menuitem = React.createClass({
	  render: function() {
    return (
    	<li key={this.props.index} className={this.props.item.className}>
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
				<Menulist data={links}/>

  		    );
  }
});

module.exports =  Menu;
// 1) cont слово плохое не понятно что значит
// 2) посмотри, поидее у тебя в консоли ругается что ты key не используешь, погугли что это такое и пофикси
// 3) вынеси это в отельный компонент MenuItem
// <li key={index} className={item.className}><a href={item.href}><span>{item.title}</span></a></li>
// 4) var links должна создаваться внутри метода render
// вообще весь код влияющий на отображение должен лежать внутри CreateClass
