'use strict';
const arr = [2, 4, 5];

function squareArray(arr){
	let swapArray = [];

	if(Array.isArray(arr)){
		for(let i = 0; i < arr.length; i++){
			swapArray.push(Math.pow(arr[i], 2));
		}
	}
	else {
		return null;
	}

	return swapArray;
}


console.log(squareArray(arr));