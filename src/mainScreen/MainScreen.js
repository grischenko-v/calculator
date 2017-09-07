import React, { Component } from 'react';
import './MainScreen.css';

class MainScreen extends Component {
   constructor(props) {
    super(props);
    this.state = {
      fontSize: "50px",
      displayMem: "none"
    };     
  }  
  componentWillUpdate(){
    if(this.props.memLength !== 0) this.state.displayMem = "block";
    else this.state.displayMem = "none";
    if(this.props.resualStr.length > 5)  this.state.fontSize = "50px"; 
    if(this.props.resualStr.length > 7)  this.state.fontSize = "30px";
    if(this.props.resualStr.length > 12) this.state.fontSize = "20px";
    if(this.props.resualStr.length > 18) this.state.fontSize = "15px";
  }

  render(props) {     
    
    return (
    	 <div className = "main-screen" style ={{fontSize: this.state.fontSize}}>{this.props.resualStr} 
    	     <span className =  "mem-sign" style ={{display: this.state.displayMem}}>M</span>
    	 </div>     
    );
  }
}

export default MainScreen;