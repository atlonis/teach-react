var React = require('react') ;
var Calc = require('./Calc') ;

var Content = React.createClass({
	render:function(){
		return(
	<div className='wrap-cont'>
		<Calc/>
	</div>
	)}
})
module.exports =  Content;
