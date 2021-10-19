'use strict';

const superRound = (num, prec) => {
	// put your code here
	let numAfterTheSing = 1;

	for(let i = 0; i < prec; i++){
		numAfterTheSing = numAfterTheSing + '0';
	}

	return [
		Math.floor(num * numAfterTheSing) / numAfterTheSing,
		Math.trunc(num * numAfterTheSing) / numAfterTheSing,
		Math.ceil(num * numAfterTheSing) / numAfterTheSing,
		Math.round(num * numAfterTheSing) / numAfterTheSing,
		+num.toFixed(prec)
	];
};

// examples
console.log(superRound(11.12556, 2)); // ==> [11.12, 11.12, 11.13, 11.13, 11.13]
superRound(6.11, 3); // ==> [6.11, 6.11, 6.11, 6.11, 6.11]
