import React, { Component } from 'react';
import './MainScreen.css';

class MainScreen extends Component {
  render(props) {  
    let font = {
    	fontSize: "70px"    
    }
    if(this.props.resualStr.length > 5)  font.fontSize = "50px"; 
    if(this.props.resualStr.length > 7)  font.fontSize = "30px";
    if(this.props.resualStr.length > 12) font.fontSize = "20px";
    if(this.props.resualStr.length > 18) font.fontSize = "15px";
    return (
    	 <div className = "main-screen" style ={{fontSize: font.fontSize}}>{this.props.resualStr}</div>     
    );
  }
}

export default MainScreen;