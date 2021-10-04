'use strict';
const arr = [3, 5, 4, 10, 10, 23, 23, 24, 23, 3, 11];

function uniqueCount(array){

	let newArray = [];

	if(Array.isArray(array)){

		for(let value of array){
			if(!newArray.includes(value)){
				newArray.push(value);
			}
		}
		if(newArray.length > 0){
			return newArray.length;
		}

	}

	return null;
}

console.log(uniqueCount(arr));

