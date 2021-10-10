'use strict';	

function addPropertyV1(userData, userId) {
	userData.id = userId;

	return userData;
}

function addPropertyV2(userData, userId) {	
	let newUserData = Object.assign(userData);
	newUserData.id = userId;
	
	return userData;
}

function addPropertyV3(userData, userId) {	
	let newUserData = Object.assign({}, userData);
	newUserData.id = userId;
	
	return newUserData;
}

function addPropertyV4(userData, userId) {	
	let newUserData = {...userData};
	newUserData.id = userId;
	
	return newUserData;
}

// examples
const user = {
name: 'Sam',
};
console.log(addPropertyV1(user, '1234567')); // ==> { name: 'Sam', id: '1234567' }
console.log(addPropertyV2(user, '1234567'));
console.log(addPropertyV3(user, '1234567'));
console.log(addPropertyV4(user, '1234567'));