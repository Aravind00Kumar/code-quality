
(function (window){
"use strict";
	
	window.console.log('hello world!');

function TestFunction(){
	window.console.log('test function executed!');
	return true;
}

function TestFunction2(){
	window.console.log('test function executed!');
	return true;
}

TestFunction();

/*eslint no-undef: 0*/
})(window);
