'use strict';

const userArray = [
	{
		name: 'Tom',
		phoneNumber: '123-12-33',
	},
	{
		name: 'Artyom',
		phoneNumber: '122-16-13',
	},
	{
		name: 'Bob',
		phoneNumber: '143-42-36',
	},
	{
		name: 'Jack',
		phoneNumber: '423-52-73',
	}
];

function sortContacts(contacts, isAsc = true){
	let result = [];

	if(!Array.isArray(contacts)){
		return null;
	}
	else if(isAsc === true){
		result = contacts.sort((a, b) => { 
		return a.name.localeCompare(b.name);});	
	}
	else{
		result = contacts.sort((a, b) => { 
		return b.name.localeCompare(a.name);});	
	}
	return result;
}



console.log(sortContacts((userArray), false));

