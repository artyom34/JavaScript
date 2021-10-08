'use strict';	

function increaseEvenEl(array, delta){
	
	let increaseEvenNumber = [];

	if(Array.isArray(array)){
		increaseEvenNumber = array.filter(number => number % 2 === 0).map(number => number + delta);
		
		return increaseEvenNumber;
	}

	return null;
}

console.log(increaseEvenEl([2, 4, 1, 3, 6], 3));