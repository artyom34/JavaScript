'use strict';

function cloneArr(arr){
	let newArray =[];

	if(Array.isArray(arr)){
		newArray = arr.slice();
	}
	else{
		return null;
	}
	return newArray;
}

console.log(cloneArr([24, 25, 40]));