'use strict';

const getRandomNumbers = (length, from, to) => {
	// put your code here
	let numbers = [];

	if(length > 0){
		for(let i = 0; i < length; i++){
			numbers[i] = Number.parseInt(Math.random() * (to - from) + from);
		} 
		return numbers;
	}
	else{
		return null
	}
};

// examples
console.log(getRandomNumbers(5, 1.4, 3.22)); // ==> [2, 2, 2, 3, 2]
getRandomNumbers(5, 1.4, 3.22); // ==> [3, 2, 2, 2, 2]
getRandomNumbers(5, 1.4, 3.22); // ==> [3, 3, 2, 3, 2]
