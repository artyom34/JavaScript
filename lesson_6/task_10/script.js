'use strict';

function includes(arr, num){

	for(let i = 0; i < arr.length; i++){

		if(arr[i] === num){
			return true;
		}
	}
	return false;
}


console.log(includes([2, 3, 5, 1, 6], 1));