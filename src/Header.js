var React = require('react') ;
var Container = require('./Container') ;

var header = React.createClass({
  render: function() {
  	var links = [
  	{
  		title: 'asdsa',
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
    	<div className='header'><Container links={links}/></div>
    	)}
  });
module.exports =  header;
