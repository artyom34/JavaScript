'use strict';

function getItemsList(){
	const elementsList = document.querySelectorAll('.technology');
	console.dir(elementsList);
	return elementsList;
}

function getItemsArray(){
	const elementsArray = document.querySelectorAll('.tool');
	Array.from(elementsArray);

	console.dir(elementsArray)

	return elementsArray;	
}

getItemsList();
getItemsArray();
