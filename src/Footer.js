var React = require('react') ;
var Container = require('./Container') ;

var Footer = React.createClass({
	getInitialState(){
		return{
		  	  	  links:[
  	{
  		title: 'Привет',
  		href:'#',
  		className:'list1',
  			id:'link1'
  	},
  	{
  		title: 'КАК',
  		href:'#',
  		className:'list2',
  			id:'link2'
  	},
  	{
  		title: 'ДЕЛА',
  		href:'#',
  		className:'list3',
  		id:'link3'
  	},
  	{
  		title: 'GO Pro',
  		href:'#',
  		classNamelist:'list4',
  		classNamebutton:'pro-button',
  		classNameicon:'icon',
  		classNametitle:'pro'
  	}
  	],
	count :{
		link1:0,
		link2:0,
		link3:0
		}
  }},
  handleclick(id){
  	var newCount = Object.assign({}, this.state.count, {[id]: this.state.count[id] + 1 }) ;
  	console.log(newCount);
  	this.setState({count: newCount});
	},
  render: function() {
    return (
    	<div className='footer'><Container links={this.state.links} handleclick={this.handleclick} count={this.state.count}/></div>
    	)}
  });

module.exports =  Footer;
