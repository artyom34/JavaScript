'use strict';

const countOccurrences = (text ='', str) => {
	if(str.length === 0){
		return null;
	}
	return text.split(str).length - 1;
};

console.log(countOccurrences('asadsaa', 'a'));