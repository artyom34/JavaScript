'use strict';

export default (arr) => {

	if(!Array.isArray(arr) || arr.length === 0){
		return null;
	}
	else{
		let arrOfPositivNum = arr.map(num => Math.abs(num));
		let minNumber = Math.min(...arrOfPositivNum);

	return minNumber * minNumber;
	}
}
