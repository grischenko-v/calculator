
var myVar = "", recentSymbol="";
var sendValueToInput, calcResult, clean, updateResInpu, cleanLast, oneX, chageSign, backspace;

sendValueToInput = function(value) {  
  recentSymbol=value;  
  myVar+=value;
  updateResInput()
};
calcResult = function(){
	var pattern_nums = /((\d+?\.?\d+?)|(\d*?\.?\d+?)|(\d+?\.?\d*?))\s*(\s*[-+/*]\s*\d*\.\d*)*?$/;	
	if(pattern_nums.test(myVar)) myVar=eval(myVar);    
    else myVar ="Wrong Value";
    updateResInput();
};
clean = function(){
	myVar="";
	updateResInput()
};
updateResInput = function(){
	document.getElementById('screen').innerHTML = myVar;
};
chageSign = function(){
	var temp = Number(myVar);
	temp = - temp;
	myVar= temp;
	updateResInput();
};
