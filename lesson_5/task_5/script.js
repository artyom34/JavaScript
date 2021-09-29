function findDivCount(a, b, n){
	
	let count = 0;
	for(let i = a + 1; i < b; i++){

		if(i % n === 0){
			count++;
		}
	}
	return count;
}
alert(findDivCount(1, 12, 5));