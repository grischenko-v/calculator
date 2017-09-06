import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Buttom from './Button/Button';
import MainScreen from './mainScreen/MainScreen';

class App extends Component {
  constructor(props) {
    super(props);
    this.resualStr = "";
    this.memory = "";
    this.charArray = ["/", "*", "7","8","9", "-",
                     "4", "5", "6", "*", "1", "2", "3"];
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

 changeSign(){
   this.resualStr = (-(+this.resualStr)).toString();
   this.forceUpdate(); 
 }

 createButtonRow(){
   let buttonArr = [];
   for(let i = 0; i < this.charArray.length; i++)
       buttonArr.push( <Buttom val = {this.charArray[i]}   getValue = {() => this.sendToScreen(this.charArray[i])} key = {i}/>)
   return buttonArr;  
 }

  render(){
       const buttons = this.createButtonRow();
       return (
        <div className = "container">  
         <MainScreen resualStr= {this.resualStr}/>            
          <Buttom val = "mc"  getValue = {() => this.sendToScreen("1")}/>
          <Buttom val = "m+"  getValue = {() => this.sendToScreen("1")}/>
          <Buttom val = "m-"  getValue = {() => this.sendToScreen("1")}/>
          <Buttom val = "mr"  getValue = {() => this.sendToScreen("1")}/>         
          <Buttom val = "C"   getValue = {() => this.cleanScreen()}/>
          <Buttom val = "+/-" getValue = {() => this.changeSign()}/>
          {buttons}
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
