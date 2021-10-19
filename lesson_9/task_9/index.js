'use strict';

const getCustomersList = obj => {
	// put your code here
	let arrayValues = [];
	let count = 0;

	for(let key in obj){
		arrayValues.push(Object.assign({}, obj[key]));
		arrayValues[count].id = key;
		count++;
	}
	
	arrayValues.sort((a, b) => a.age > b.age ? 1: -1);

	// arrayValues.push(Object.assign({}, obj));
	
	return arrayValues;
};

const customers = {
	'customer-id-1': {
		name: 'William',
		age: 54,
	},
	'customer-id-2': {
		name: 'Tome',
		age: 17,
	}
};


console.log(getCustomersList(customers));
console.log(customers);