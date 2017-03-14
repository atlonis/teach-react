var React = require('react') ;
var Container = require('./Container') ;

var Footer = React.createClass({
  render: function() {
  	  	var links = [
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
    return (
    	<div className='footer'><Container links={links}/></div>
    	)}
  });

module.exports =  Footer;
