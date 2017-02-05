
var myVar = "", recentSymbol="";
var sendValueToInput, calcResult, clean, updateResInpu, cleanLast, oneX, chageSign;

sendValueToInput = function(value) {  
  recentSymbol=value;
  myVar+=value;
  updateResInput()
};

calcResult = function(){
	var pattern_nums =/\d+/g;
	var pattern =/\+/g;
	var nums, calc_sign;
	var check_pattern =/\d+[-*+//]\d+/g
	nums = myVar.match(pattern_nums);
    calc_sign = myVar.match(pattern);
    alert(Number(nums[0]) + Number(nums[1]));
};
clean = function(){
	myVar="";
	updateResInput()
};
updateResInput = function(){
	document.getElementById('input').value = myVar;
};
cleanLast = function(){
   
};
oneX = function(){
	Number(myVar)=1/Number(myVar);
	updateResInput();
};
chageSign = function(){
	Number(myVar)=Number(-myVarl);
	updateResInput();
};