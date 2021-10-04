'use strict';
const arr = [3, 5, 10, 10, 23, 23, 24, 23, 3];

function removeDuplicates(array){
	let count = 0;

	if(Array.isArray(array)){
		for(let i = 0; i < array.length; i++){

			for(let j = count; j < array.length; j++){

				if(array[i] === array[j + 1]){
					array.splice(j + 1, 1);
				}
			}
			count++;
		}
		if(array.length > 0){
			return array;
		}
	}
	return null;
}

console.log(removeDuplicates(arr));


