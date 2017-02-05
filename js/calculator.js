
var myVar = ""
var sendValueToInput, calcResult;
sendValueToInput = function(value) {
  
  myVar+=value;
 document.getElementById('input').value = myVar;
};
calcResult = function(){
	alert(+myVar.charAt(0));

};