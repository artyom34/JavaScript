'use strict';

export function reverseString(string){
	
	if(typeof string !== 'string'){
		return null;
	}
	
	let reverseWord = '';
	let arrayLetters = string.split('');

	arrayLetters.reverse();
	
	for(let i = 0; i < arrayLetters.length; i++){
			reverseWord = reverseWord + arrayLetters[i];
	}
	return reverseWord;
}

console.log(reverseString('asdf'));