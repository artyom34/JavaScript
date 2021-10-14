'use strict';

const numbersArray = [2, 12.4, 20, 12, 34.528];

function getTotalPrice(array){

	let sum = array.reduce((sum, current) => sum + current);
	
	return "$" + Math.trunc(sum * 100) / 100;
}

console.log(getTotalPrice(numbersArray));