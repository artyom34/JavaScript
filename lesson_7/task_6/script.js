'use strict';	

function sum(arr){

	if(Array.isArray(arr)){
		return arr.reduce((sum, current) => sum + current, 0);
	}

	return null;
}


console.log(sum([1, 5, 1, 4, 5]));