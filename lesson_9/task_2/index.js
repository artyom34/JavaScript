'use strict';	

function getKeys(obj){
	let arrayKeys = Object.keys(obj);
	for(let i = 0; i < arrayKeys.length; i++){
		console.log(arrayKeys[i]);
	}
}


const user = {
	name: 'Artyom',
	id: 1,
};
getKeys(user);