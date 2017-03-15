var React = require('react') ;

var Calc = React.createClass({
	render:function(){
		return(
			<div className="calculator">
			  <button  className="clear">C</button>
			  <button className="num" >7</button>
			  <button className="num" >8</button>
			  <button className="num" >9</button>
			  <button  className="ops">+</button>
			  <button className="num" >4</button>
			  <button className="num" >5</button>
			  <button className="num" >6</button>
			  <button  className="ops">-</button>
			  <button className="num" >1</button>
			  <button className="num" >2</button>
			  <button className="num" >3</button>
			  <button  className="ops">*</button>
			  <button className="num" >0</button>
			  <button className="num" >.</button>
			  <button className="equals">=</button>
			  <button className="ops">/</button>
			</div>
	)}
})

module.exports =  Calc;
