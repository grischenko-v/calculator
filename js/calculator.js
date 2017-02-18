
var myVar = "";
var memValue = "";
var sendValueToInput, calcResult, clean, updateResInpu, cleanLast, oneX, chageSign, backspace;
var MC, Mplus, Mmin, MR;
var mem_on = false;
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

  function updateResInput (){
	var elem = document.getElementById('screen');	
    if(myVar.length < 5)  elem.style.fontSize  = '70px';
	else if(myVar.length >= 5 && myVar.length < 8) elem.style.fontSize = '50px';
	else if(myVar.length >= 8 && myVar.length < 10) elem.style.fontSize = '40px';
	else if(myVar.length >= 10 && myVar.length < 12) elem.style.fontSize  = '30px';
	else if(myVar.length >=12) elem.style.fontSize  = '22px'; 
	document.getElementById('screen').innerHTML = '<div id="mem-sign">M</div>' + myVar;
	var memSign = document.getElementById('mem-sign'); 
	if(mem_on){  
		memSign.style.display =  'block';
    } else {
    	memSign.style.display = 'none'; 
    }
};
chageSign = function(){
	var temp = Number(myVar);
	temp = - temp;
	myVar = temp.toString();	
	updateResInput();
};
MC = function(){
  mem_on = false;  
  memValue = '';
  updateResInput();
 };
Mplus = function(){ 
  mem_on = true;
   memValue = Number(memValue) + Number(myVar);
   updateResInput();
 };
Mmin = function(){
  memValue = Number(memValue) - Number(myVar);
  mem_on = true;
  updateResInput();
 };
MR = function(){ 
  var pattern_nums = /[/*///+/-]/;	
  mem_on = (mem_on) ? true : false; 
  if(pattern_nums.test(myVar.slice(-1))){
     sendValueToInput(memValue);
  } else {
  	myVar = memValue;
  	updateResInput();
  }  
 // updateResInput();
};