'use strict';

export const calc = expression =>{

	let result = 0;
	let [firstNumber, opertor, secondNumber] = 
		expression.split(' ');

	switch(opertor){
		case '+':  result = +firstNumber + +secondNumber;
		break;
		case '-':  result = firstNumber - secondNumber;
		break;
		case '*':  result = firstNumber * secondNumber;
		break;
		case '/':  result = firstNumber / secondNumber;
		break;
	}

	return `${expression} = ${result}`;
}

console.log(calc('1 * 2'));