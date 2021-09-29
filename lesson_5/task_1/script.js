function getSum(startInterval, endInterval){
	let sum = 0;
	for(let i = startInterval; i <= endInterval; i++){
		if(i % 2 === 0){
			sum += i;
		}
	}
	return sum;
}

alert(getSum(1, 10));