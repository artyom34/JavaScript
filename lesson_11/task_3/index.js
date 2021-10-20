'use strict';

function splitString(string, lenSubStr = 10){
	let subStrArray = [];
	let startPosition = 0;

	if(typeof string !== 'string'){
		return null;
	}

	while(true){

		let piece = string.substr(startPosition, lenSubStr);

		if(piece.length === 0){
			break;
		}
		if(piece.length !== lenSubStr){
			while(piece.length != lenSubStr){
				piece += '.';
			} 
		}  
		subStrArray.push(piece);
		startPosition += lenSubStr;
	}
	return subStrArray;
}


console.log(splitString('aasdasrasdasda', 4));

