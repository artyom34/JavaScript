'use strict';

function reverseArray(arr){

	let swapArray = [];

	if(Array.isArray(arr)){

		for(let i = arr.length - 1; i >=0; i-- ){
			swapArray.push(arr[i]);
		}
		return swapArray;
	}

	return null;
}

console.log(reverseArray([20, 30, 40, 50]));