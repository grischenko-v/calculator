import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Buttom from './Button/Button';


class App extends Component {
  render(){
       return (
       <div className = "container">   
         <div className = "main-screen"></div>
         <div> 
         <div className = "buttons-row">   
          <Buttom val = "mc"/>
          <Buttom val = "m+"/>
          <Buttom val = "m-"/>
          <Buttom val = "mr"/>
         </div>
         <div className = "buttons-row">   
          <Buttom val = "C"/>
          <Buttom val = "^"/>
          <Buttom val = "/"/>
          <Buttom val = "*"/>
         </div>
         <div className = "buttons-row">   
          <Buttom val = "7"/>
          <Buttom val = "8"/>
          <Buttom val = "9"/>
          <Buttom val = "-"/>
        </div>
        </div>
      </div>
     );
  }
}

export default App;
