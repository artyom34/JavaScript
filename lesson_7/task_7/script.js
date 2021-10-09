'use strict';	

function filterNames(arr, text){

	let suitableNames = arr.filter(name => name.indexOf(text) + 1 && name.length > 5);
	
	return suitableNames;
}

console.log(filterNames(['Hell', 'Artyom'], 'H'));