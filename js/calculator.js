
var myVar = "";
var memValue;
var sendValueToInput, calcResult, clean, updateResInpu, cleanLast, oneX, chageSign, backspace;
var MC, Mplus, Mmin, MR;
sendValueToInput = function(value) {     
  //if(myVar.length < 16) 
  myVar+=value;
  updateResInput()
};
calcResult = function(){
	var pattern_nums = /((\d+?\.?\d+?)|(\d*?\.?\d+?)|(\d+?\.?\d*?))\s*(\s*[-+/*]\s*\d*\.\d*)*?$/;	
	if(pattern_nums.test(myVar)) myVar=eval(myVar).toString(); 
    else myVar ="Wrong Value"; 
    updateResInput();
};
clean = function(){
	myVar="";
	updateResInput()
};

updateResInput = function(){
	var elem = document.getElementById('screen');	
    if(myVar.length < 5)  elem.style.fontSize  = '70px';
	else if(myVar.length >= 5 && myVar.length < 8) elem.style.fontSize = '50px';
	else if(myVar.length >= 8 && myVar.length < 10) elem.style.fontSize = '40px';
	else if(myVar.length >= 10 && myVar.length < 12) elem.style.fontSize  = '30px';
	else if(myVar.length >=12) elem.style.fontSize  = '22px';	
	document.getElementById('screen').innerHTML = myVar;
};
chageSign = function(){
	var temp = Number(myVar);
	temp = - temp;
	myVar = temp.toString();	
	updateResInput();
};
MC = function(){
  memValue = 0;

 };
Mplus = function(){
   var memSign;
   memValue = Number(myVar);
   memSign = document.getElementById('mem-sign');
   memSign.style.display = 'block';

 };
Mmin = function(){
  memValue = -Number(myVar);
 };
MR = function(){ 
  sendValueToInput(memValue.toString());
};