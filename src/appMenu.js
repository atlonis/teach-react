var React = require('react') ;

var Menu = React.createClass({
  render: function() {
  	return (
			<ul className="menu">
				<li className="list1"><a href=""><span>Home</span></a></li>
				<li className="list2"><a href=""><span>Сourses</span></a></li>
				<li className="list3"><a href=""><span>Groups</span></a></li>
				<li className="list4"><a href="">
					<span className="pro-button">
						<span className="icon"></span><span className="pro">Go Pro</span>
					</span>
				</a></li>
			</ul>
  		    );
  }
});

module.exports =  Menu;
