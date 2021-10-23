'use strict';

it('17 и в Африке 17', () =>{
	expect(17).toEqual(17);
});

it('18 is not equal to 17', () =>{
	expect(17).not.toEqual(18);
});

const getEvenNumbers = arr =>
arr.filter(num => (num % 2 === 0));

it('should get all even numbers', () =>{
	const result = getEvenNumbers([1, 2, 3, 4]);

	expect(result).toEqual([2, 4]);
});