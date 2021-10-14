'use strict';

const getMaxAbsoluteNumber = arr => {
	// put your code here
	if(Array.isArray(arr))
		if(arr.length > 0){
			return Math.max(...arr.map(number => Math.abs(number)));
		}
		else {
			return null;
		}
	return null;
};

// examples
console.log(getMaxAbsoluteNumber([-10, 10, -10])); // ===> 10
getMaxAbsoluteNumber([2.1, 0, 1.6]); // ===> 2.1
getMaxAbsoluteNumber([-6, 3, 5, -1]); // ===> 6
console.log(getMaxAbsoluteNumber([-777, 3, -1, 45, -20])); // ===> 777
console.log(getMaxAbsoluteNumber([]));