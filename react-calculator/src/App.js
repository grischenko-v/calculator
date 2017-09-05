import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Buttom from './Button/Button';


class App extends Component {
  constructor(props) {
    super(props);
    this.resualStr = "";

  }

 sendToScreen(e) { 
   this.resualStr+=arguments[0];   
   this.forceUpdate();  
  }

 getResualt(e){
   this.resualStr = eval(this.resualStr).toString();
   this.forceUpdate();  
 }

 cleanScreen(e){
   this.resualStr = "";
   this.forceUpdate(); 
 }

  render(){
       return (
       <div className = "container">   

         <div className = "main-screen">{this.resualStr}</div>
              
          <Buttom val = "mc"  getValue = {() => this.sendToScreen("1")}/>
          <Buttom val = "m+"  getValue = {() => this.sendToScreen("1")}/>
          <Buttom val = "m-"  getValue = {() => this.sendToScreen("1")}/>
          <Buttom val = "mr"  getValue = {() => this.sendToScreen("1")}/>
         
          <Buttom val = "C"   getValue = {() => this.cleanScreen()}/>
          <Buttom val = "^"   getValue = {() => this.sendToScreen("?")}/>
          <Buttom val = "/"   getValue = {() => this.sendToScreen("/")}/>
          <Buttom val = "*"   getValue = {() => this.sendToScreen("*")}/>        
         
          <Buttom val = "7"   getValue = {() => this.sendToScreen("7")}/>
          <Buttom val = "8"   getValue = {() => this.sendToScreen("8")}/>
          <Buttom val = "9"   getValue = {() => this.sendToScreen("9")}/>
          <Buttom val = "-"   getValue = {() => this.sendToScreen("-")}/>
     
          <Buttom val = "4"   getValue = {() => this.sendToScreen("4")}/>
          <Buttom val = "5"   getValue = {() => this.sendToScreen("5")}/>
          <Buttom val = "6"   getValue = {() => this.sendToScreen("6")}/>
          <Buttom val = "+"   getValue = {() => this.sendToScreen("+")}/>
      
          <Buttom val = "1"   getValue = {() => this.sendToScreen("1")}/>
          <Buttom val = "2"   getValue = {() => this.sendToScreen("2")}/>
          <Buttom val = "3"   getValue = {() => this.sendToScreen("3")}/>
             
        <Buttom val = "0" styleName = "zero" 
                             getValue = {() => this.sendToScreen("0")}/>
          <Buttom val = "."  getValue = {() => this.sendToScreen(".")}/>   
      
           <Buttom val = "=" styleName = "equil"
                             getValue = {() => this.getResualt()}/>    
      </div>
     );
  }
}

export default App;
