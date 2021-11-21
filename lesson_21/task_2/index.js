'use strict';

export function getTitleElement(){
	const titleElem = document.querySelector('.title');

	return console.dir(titleElem);
}

export function getImputElement(){
	const inputElem = document.querySelector('input').type = 'text';

	return console.dir(inputElem);	
}

getTitleElement();
getImputElement();