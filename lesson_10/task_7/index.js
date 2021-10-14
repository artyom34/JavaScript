'use strict';

function compareObjects(obj1, obj2) {
// put your code here	
	const objData1 = Object.entries(obj1).flat(Infinity);
	const objData2 = Object.entries(obj2).flat(Infinity);

	

	return true;
}

// examples
const obj1 = {
name: 'Tom',
age: 17,
};

const obj2 = {
name: 'Bob',
age: 17,
};

const obj3 = {
name: 'Bob',
age: 17,
student: false,
};

const obj4 = {
name: 'Tom',
age: 17,
};

// console.log(compareObjects(obj1, obj2)); // ==> false
// compareObjects(obj2, obj3); // ==> false
// console.log(compareObjects(obj1, obj4)); // ==> true

console.log(compareObjects(obj1, obj2));