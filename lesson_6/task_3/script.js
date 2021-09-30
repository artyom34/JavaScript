'use strict';

function increaseEvenEl(arr, delta){

	if(Array.isArray(arr)){
		let increaseEvenArray = arr.slice();
		
		for(let i = 0; i < increaseEvenArray.length; i++){
			
			if(increaseEvenArray[i] % 2 === 0){
				increaseEvenArray[i] += delta;
			}
		}
		return increaseEvenArray;
	}
		return null;
}


console.log(increaseEvenEl([12, 24, 3, 5], 10));