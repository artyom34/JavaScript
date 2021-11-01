'use strict';

function createArrayOfFunctions(number){	
	let arrayFunctions = []; 

	if(number === undefined){
		return arrayFunctions;
	}

	if(typeof number !== 'number'){
		return null;
	}

	for(let i = 0; i < number; i++){

			arrayFunctions[i] = function(){

			return i;
		}
	}
	return arrayFunctions;
}

let pos = createArrayOfFunctions(9)[4]();

console.log(pos);