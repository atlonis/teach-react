var React = require('react') ;
var Container = require('./Container') ;

var Footer = React.createClass({
	getInitialState(){
		return{
		  	  	  links:[
  	{
  		title: 'Привет',
  		href:'',
  		className:'list1'
  	},
  	{
  		title: 'КАК',
  		href:'',
  		className:'list2'
  	},
  	{
  		title: 'ДЕЛА',
  		href:'',
  		className:'list3'
  	}
  	]
  }},
  render: function() {
    return (
    	<div className='footer'><Container links={this.state.links}/></div>
    	)}
  });

module.exports =  Footer;
