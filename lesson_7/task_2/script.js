'use strict';	

function reverseArray(array){
	let reverseArray = array.slice();

	if(Array.isArray(reverseArray)){
		return reverseArray.reverse();
	}
	
	return null;
}

console.log(reverseArray([2, 5, 10, 18]));