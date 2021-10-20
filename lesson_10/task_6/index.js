'use strict';

const getRandomNumbers = (length, from, to) => {
	// put your code here
	let numbers = [];

		if((to - from) < 1 && (to - from) > -1){
			return null;
		}

		for(let i = 0; i < length; i++){
			numbers[i] = parseInt(Math.random()
			* (to - from) + from);
		}

		return numbers;
};

// examples
console.log(getRandomNumbers(5, 1.4, 3.6)); // ==> [2, 2, 2, 3, 2]
getRandomNumbers(5, 1.4, 3.22); // ==> [3, 2, 2, 2, 2]
getRandomNumbers(5, 1.4, 3.22); // ==> [3, 3, 2, 3, 2]
