import React, { Component } from 'react';
import './MainScreen.css';

class MainScreen extends Component {
   constructor(props) {
    super(props);
    this.textStyle = {
      fontSize: "50px",
      displayMem: "none"
    };
  }

  componentWillReceiveProps(){
    console.log();
    if(this.props.memLength !== 0) this.textStyle.displayMem = "block";
    else this.textStyle.displayMem = "none";
    if(this.props.resualStr.length >= 0) this.textStyle.fontSize = "50px";
    if(this.props.resualStr.length > 5)  this.textStyle.fontSize = "40px"; 
    if(this.props.resualStr.length > 7)  this.textStyle.fontSize = "30px";
    if(this.props.resualStr.length > 11) this.textStyle.fontSize = "20px";
    if(this.props.resualStr.length > 18) this.textStyle.fontSize = "15px";
    
  }

  render(props) {    
    return (
    	 <div className = "main-screen" style ={{fontSize: this.textStyle.fontSize}}>{this.props.resualStr} 
    	     <span className =  "mem-sign" style ={{display: this.textStyle.displayMem}}>M</span>
    	 </div>     
    );
  }
}

export default MainScreen;