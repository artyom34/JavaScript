'use strict';	

const getPeople = obj => {
	// put your code here
	let valesObject = Object.values(obj);
	let arrayResidents = valesObject.flat(Infinity);
	
	return arrayResidents.map(item => item.name);
};

const array = [[{name: 'Artyom'}, {name: 'Grisha'},], [{name: 'Alex'}, {name: 'Gosha'},], [{name: 'Arisha'}, {name: 'Irina'},]];

const rooms = {
	room1: [
		{name: 'Jack'},
		{name: 'Andrey'},
		{name: 'Ann'},
		{name: 'Vasyl'},
	],
	room2:[
		{name: 'Dan'},
	],
	room3: [
		{name: 'Denis'},
		{name: 'Max'},
		{name: 'Alex'},
	],
};

console.log(getPeople(rooms));