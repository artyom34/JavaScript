'use strict';

const numbersArray = [12.3, 11, 4.4, 10.2, 15, '12  ', ' 12a'];

function getParsedIntegers(array){

	return array.map(number => Number.parseInt(number));
}
function getParsedIntegersV2(array){

	return array.map(number => parseInt(number));
}
function getParsedFloats(array){

	return array.map(number => Number.parseFloat(number));
}
function getParsedFloatsV2(array){

	return array.map(number => parseFloat(number));
}

console.log(getParsedIntegers(numbersArray));
console.log(getParsedIntegersV2(numbersArray));
console.log(getParsedFloats(numbersArray));
console.log(getParsedFloatsV2(numbersArray));
