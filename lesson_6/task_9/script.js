'use strict';
const arr = [3, 5, 10, 11, 23];
function getSubArray(arr, number){

		return arr.slice(0, number);
}

console.log(getSubArray(arr, 3));

