'use strict';

function checkSum(arr){
	let sumNumbers = 0;

	if(Array.isArray(arr)){
		for(let i = 0; i< arr.length; i++){
			sumNumbers += arr[i];
		}
		if(sumNumbers > 100){
			return true;
		}
			return false;
	}
		return null;
}

console.log(checkSum(20));