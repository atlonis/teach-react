var React = require('react') ;
var Container = require('./Container') ;

var Header = React.createClass({
	getInitialState(){
		return{
		 	 links :[
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
  	},
  	 {
  		title: 'GO Pro',
  		href:'',
  		classNamelist:'list4',
  		classNamebutton:'pro-button',
  		classNameicon:'icon',
  		classNametitle:'pro'
  	}
  	]
	}},
  render: function() {
    return (
    	<div className='header'><Container links={this.state.links}/></div>
    	)}
  });
module.exports =  Header;

