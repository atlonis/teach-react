var React = require('react') ;


var App = React.createClass({
  render: function() {
    return (
    	<div  className="wrap">
		<div  className="left-header">
			<div  className="cont-logo"><a  className="wrap-logo" href=""><span  className="logo"></span><span  className="logo-text"></span></a>
			</div> 
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
		</div>
	</div>
    );
  }
});
module.exports =  App;
