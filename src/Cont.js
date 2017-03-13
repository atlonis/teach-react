var React = require('react') ;
var Menu = require('./Menu') ;

var Container = React.createClass({
  render: function() {
    return (
		<div  className="Container">
			<div  className="cont-logo">
				<a  className="wrap-logo" href=""><span  className="logo"></span><span  className="logo-text"></span></a>
			</div>
				<Menu  data={links}/>
		</div>
    );
  }
});

module.exports =  Container;

var links = [
{
	title: 'Home',
	href:'',
	className:'list1'
},
{
	title: 'Сourses',
	href:'',
	className:'list2'
},
{
	title: 'Сourses',
	href:'',
	className:'list3'
}
]
