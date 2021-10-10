'use strict';	

function addPropertyV1(obj, key, value) {
  // put your code here
	obj[key] = value;

	return 	obj;
}

function addPropertyV2(obj, key, value) {

	let newObj = Object.assign(obj);
	newObj[key] = value;

	return 	newObj;
}

function addPropertyV3(obj, key, value) {

	let newObj = Object.assign({}, obj);
	newObj[key] = value;

	return 	newObj;
}

function addPropertyV4(obj, key, value) {

	let newObj = {...obj};
	newObj[key] = value;

	return 	newObj;
}

// examples
const transaction = {
	value: 170,
};
console.log(addPropertyV1(transaction, 'currency', 'USD'));
console.log(addPropertyV2(transaction, 'currency', 'USD'));
console.log(addPropertyV3(transaction, 'currency', 'USD'));
console.log(addPropertyV4(transaction, 'currency', 'USD'));