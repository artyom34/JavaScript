'use strict';	
function mergeObjectsV1(obj1, obj2) {
// put your code here
	let margeObject = Object.assign({}, obj1, obj2);

	return margeObject;
}

function mergeObjectsV2(obj1, obj2) {
// put your code here
	let margeObject = Object.assign({}, obj2, obj1);

	return margeObject;
}

function mergeObjectsV3(obj1, obj2) {
// put your code here
	let margeObject = {...obj1, ...obj2};

	return margeObject;
}

function mergeObjectsV4(obj1, obj2) {
// put your code here
	let margeObject = {...obj2, ...obj1};

	return margeObject;
}

// examples
const obj1 = {
name: 'Tom',
age: 17,
};

const obj2 = {
name: 'Bob',
student: false,
};

console.log(mergeObjectsV1(obj1, obj2)); // ==> { name: 'Bob', age: 17, student: false }
console.log(mergeObjectsV2(obj1, obj2)); // ==> { name: 'Tom', age: 17, student: false }
console.log(mergeObjectsV3(obj1, obj2)); // ==> { name: 'Bob', age: 17, student: false }
console.log(mergeObjectsV4(obj1, obj2)); // ==> { name: 'Tom', age: 17, student: false }
