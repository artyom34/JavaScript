'use strict';	

const getAdults = obj => {
	const AdultsUsers = {}

	for(let key in obj){
		if(obj[key] >= 18){
			AdultsUsers[key] = obj[key];
		}
	}
	return AdultsUsers;
}
console.log(getAdults({ 'John Doe': 19, Tom: 17, Bob: 18 })); // ==> { 'John Doe': 19, Bob: 18 }
console.log(getAdults({ Ann: 56, Andrey: 7 })); // ==> { Ann: 56 }
