'use strict';

const numberArray = [12, '12', 12.5, 5.8,'12as', -20, -3, NaN];

function getFiniteNumbers(arr){

	return	arr.filter(number => Number.isFinite(number));
}
function getFiniteNumbersV2(arr){

	return	arr.filter(number => isFinite(number));
}
function getNaN(arr){
	
	return arr.filter(number => Number.isNaN(number));	
}
function getNaNV2(arr){
	
	return arr.filter(number => isNaN(number));	
}

function getIntegers(arr){

	return arr.filter(number => Number.isInteger(number));
} 

console.log(getFiniteNumbers(numberArray));
console.log(getFiniteNumbersV2(numberArray));
console.log(getNaN(numberArray));
console.log(getNaNV2(numberArray));
console.log(getIntegers(numberArray));
