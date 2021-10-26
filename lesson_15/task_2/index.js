'use strict';

export function createCalculator(){

	let number = 0;

	function add(num){
		number += num;
	}

	function decrease(num){
		number -= num;
	}

	function reset(){
		number = 0;
	}

	function getMemo(){
		return number;
	}

	return {
		add,
		decrease,
		reset, 
		getMemo,
	};
}



