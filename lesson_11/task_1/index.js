'use strict';

function splitText(string, nubmber = 10){

	if(typeof string !== 'string'){
		return null;
	}

	let piecesOfStrings = [];
	let startPosition = 0;

	while(true){
		let piece = string.substr(startPosition, nubmber);

		if(piece.length === 0){
			break;
		}

		piecesOfStrings.push(piece[0].toUpperCase() + piece.slice(1));
		startPosition += nubmber;
	}

	return piecesOfStrings.join('\n');
}


console.log(splitText('12123123', 4));