'use strict';

function buildObject(keysList, valuesList) {
	// put you code here
	let userObject = {};
	// for(let i = 0; i < keysList.length; i++){
		
	// 	userObject[keysList[i]] = valuesList[i];
	// }

	userObject = keysList.reduce((obj, key, value) => (obj[key] = valuesList[value], obj), {});

	return userObject;
}

// examples
const keys = ['name', 'address', 'age'];
const values = ['Bob', 'Ukraine', 34];
const result = buildObject(keys, values); // ==> { name: 'Bob', address: 'Ukraine', age: 56 }

console.log(result);