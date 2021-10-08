'use strict';	

function cloneArr(arr){
	if(Array.isArray(arr)){
		let cloneArray = arr.slice();
		return cloneArray;
	}
	return null;
}