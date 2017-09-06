import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Buttom from './Button/Button';
import MainScreen from './mainScreen/MainScreen';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      resualStr: "",
      memory:    ""
    };  
    this.charArray = ["/", "*", "7","8","9", "-",
                     "4", "5", "6", "+", "1", "2", "3"];
  }

 sendToScreen(e) {    
   this.setState({
      resualStr: this.state.resualStr+arguments[0]
    });
  }

 getResualt(e){ 
    let resVal = this.state.resualStr;
    let pattern_nums = /((\d+?\.?\d+?)|(\d*?\.?\d+?)|(\d+?\.?\d*?))\s*(\s*[-+/*]\s*\d*\.\d*)*?$/; 
    if(pattern_nums.test(resVal)) resVal=eval(resVal).toString(); 
    else if(this.state.resualStr.length == 0) resVal = "";
    else resVal = "Wrong Value"; 
    this.setState({
      resualStr: resVal
    });     
 }

 cleanScreen(e){
     this.setState({
      resualStr:  ""
    });   
 }

 changeSign(){
  let val;
  if(this.state.resualStr.length == 0) val = "";
  else val = (-(+this.state.resualStr)).toString();
    this.setState({
      resualStr: val 
    });    
 }
 saveInMem(){
  let val;
  if(this.state.resualStr.length == 0) val = this.state.memory;
  else val = (+this.state.resualStr + +this.state.memory).toString();
  
   this.setState({
      memory: val
   });   
 }

 saveInMemmin(){
   let val;
   if(this.state.resualStr.length == 0) val = this.state.memory;
   else val =  (+(this.state.memory) - this.state.resualStr).toString();
   this.setState({
      memory: val
   });  
 }
 cleanMem(){
  this.setState({
    memory: ""
  })
 }

 readMem(){
    this.setState({
      resualStr: this.state.memory
   })
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
         <MainScreen resualStr= {this.state.resualStr} memLength = {this.state.memory.length}/>            
          <Buttom val = "mc"  getValue = {() => this.cleanMem()}/>
          <Buttom val = "m+"  getValue = {() => this.saveInMem()}/>
          <Buttom val = "m-"  getValue = {() => this.saveInMemmin()}/>
          <Buttom val = "mr"  getValue = {() => this.readMem()}/>         
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
