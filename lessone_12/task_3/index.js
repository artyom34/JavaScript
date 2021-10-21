'use strict';
const array = [' 12.2 ', '1 sada', '13 '];

function cleanTransactionsList(array){
	let arrayNumber = [];
	let count = 0;

	for(let i = 0; i < array.length; i++){
		let number = +array[i];
		if(!isNaN(number)){
			arrayNumber[count] = '$' +  number.toFixed(2);
			count++;
		}
	}

	return arrayNumber;
}

console.log(cleanTransactionsList(array));
console.log(array);