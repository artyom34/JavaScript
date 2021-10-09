'use strict';	

function arrAverage(arr){
	if(Array.isArray(arr)){
		return arr.reduce((sum, current) => sum + current, 0) / arr.length;
	}
	return null;
}

console.log(arrAverage([1, 5, 3, 5]));