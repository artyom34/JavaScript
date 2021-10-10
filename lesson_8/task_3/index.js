'use strict';	

const concatProps = obj => {
	// put your code here
	const concatArray = [];

	for(let key in obj){
		concatArray.push(obj[key]);
	}

	return concatArray;
};

// examples
console.log(concatProps({ name: 'John Doe', age: 17, interest: 'football' })); // ==> ['John Doe', 17, 'football']); // ==> { a: 'a', '17.1': 17.1, 'John Doe': 'John Doe' }
