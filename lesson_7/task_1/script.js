'use strict';	

function squareArray(arrayNumbers){

	if(Array.isArray(arrayNumbers)){
		
		let squareNumbers = arrayNumbers.map(number => number * number);

		return squareNumbers;
	}

	return null;
}

console.log(squareArray([2, 4, 5, 10]));