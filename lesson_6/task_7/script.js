'use strict';

function sortAsc(array){

	if(Array.isArray(array)){

		for(let i = 0; i < array.length; i++){

			for(let j = 0; j < array.length; j++){
				let number = 0;

				if(array[j] > array[j + 1]){

					number = array[j];
					array[j] = array[j + 1];
					array[j + 1] = number;
				}
			}		
		}
		return array;
	}

	return null;
}
function sortDesc(array){
	if(Array.isArray(array)){

		for(let i = 0; i < array.length; i++){

			for(let j = 0; j < array.length; j++){
				let number = 0;

				if(array[j] < array[j + 1]){

					number = array[j];
					array[j] = array[j + 1];
					array[j + 1] = number;
				}
			}		
		}
		return array;
	}

	return null;
}

console.log(sortAsc([123, 1, 123, 0, 2, 34, 23, 34, 144, 0]));