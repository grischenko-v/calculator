import React, { Component } from 'react';
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
  };

 checkValue(str){   
   let signMass = (str.match(/[+*/-]/g) === null) ? [] : str.match(/[+*/-]/g);  
   let valueMas;
   if(str.length === 1 && str[0] === "-") valueMas = [];
   else
   valueMas = str.split(/[+*/-]/).map(function(value){             
       if(value.match(/[.]/g) !== null && value.match(/[.]/g).length === 1) return value; 
       return parseFloat(value);
    });
   let maxLen = (valueMas.length > signMass.length) ? valueMas.length : signMass.length;
   let ckeckedStr; 
   ckeckedStr = "";     
   for(let i = 0; i < maxLen; i++ ){

    if(valueMas[i] || valueMas[i] === 0)ckeckedStr += valueMas[i];
    if(signMass[i]) ckeckedStr += signMass[i];   
   }    
   return ckeckedStr;
};

 sendToScreen(e) {  
   let val ="";
   let re = ((this.state.resualStr[0] === "-" || (this.state.resualStr === "" && arguments[0]) === "-"))
            ?  /^(-((\d+?(\.(\d+)?)?[+*/-]?)?)+)$/
            :  /^((\d+)(\.(\d+)?)?[+*/-]?)+$/;
   if(re.test(this.state.resualStr + arguments[0])){
    val = this.state.resualStr + arguments[0];
 
    val = this.checkValue(val);
   }
   else val = this.state.resualStr;
   this.setState({
      resualStr: val
    });
  };

 getResualt(e){ 
    let resVal = this.state.resualStr;   
    if(/^[-]?(\d+|\d+\.\d+)([-+/*](\d+|\d+\.\d+))*?$/.test(resVal)) resVal=eval(resVal).toString();  
    this.setState({
      resualStr: resVal
    });     
 };

 cleanScreen(e){
     this.setState({
      resualStr:  ""
    });   
 };

 changeSign(){
  let val;
  if(/^-?\d+?(\.(\d+))?$/.test(this.state.resualStr)) val = (-this.state.resualStr).toString();
  else val = this.state.resualStr;
    this.setState({
      resualStr: val 
    });    
 };

 saveInMem(){
  let val;
  if(/^-?\d+?(\.(\d+))?$/.test(this.state.resualStr))  val = (+this.state.resualStr + +this.state.memory).toString();
  else val = this.state.memory;  
  this.setState({
      memory: val
   });   
 };

 saveInMemmin(){
  let val;
  if(/^-?\d+?(\.(\d+))?$/.test(this.state.resualStr))  val = (+(this.state.memory) - this.state.resualStr).toString();
  else val = this.state.memory;    
   this.setState({
      memory: val
   });  
 };
 cleanMem(){
  this.setState({
    memory: ""
  })
 };

 readMem(){
    this.setState({
      resualStr: this.state.memory
   })
 };
 
 createButtonRow(){
   let buttonArr = [];
   for(let i = 0; i < this.charArray.length; i++)
       buttonArr.push( <Buttom val = {this.charArray[i]}   getValue = {() => this.sendToScreen(this.charArray[i])} key = {i}/>)
   return buttonArr;  
 };

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
          <Buttom val = "." styleName = "point"
                             getValue = {() => this.sendToScreen(".")}/>   
          <Buttom val = "=" styleName = "equil"
                             getValue = {() => this.getResualt()}/>    
      </div>
     );
  }
}

export default App;
