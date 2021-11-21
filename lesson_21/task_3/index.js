'use strict';

export function getItemsList(){
	const elementsList = document.querySelectorAll('.technology');
	console.dir(elementsList);
	return elementsList;
}

export function getItemsArray(){
	const elementsArray = document.querySelectorAll('.tool');
	
	Array.from(elementsArray);
	console.dir(elementsArray);

	return elementsArray;	
}

getItemsList();
getItemsArray();
