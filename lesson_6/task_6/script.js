'use strict';

function checker(arr){
	let minNumber = 0;
	let maxNumber = 0;

	if(Array.isArray(arr)){
		minNumber = arr[0];
		maxNumber = arr[0];

		for(let i = 0; i < arr.length; i++){
			
			if(arr[i] < minNumber){
				minNumber = arr[i];
			}
		}
		
		for(let i = 0; i < arr.length; i++){
			
			if(arr[i] > maxNumber){
				maxNumber = arr[i];
			}
		}

		if(minNumber + maxNumber > 1000){
			return true;
		}
		else{
			return false;
		}
	}
	return null;
}

console.log(checker([ 1000, 0]));