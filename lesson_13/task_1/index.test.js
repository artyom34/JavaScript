import { getSquareNumbers, getOddNumbers } from 'index.js'; 

it('should get square numbers', () =>{
	const result = getSquareNumbers([1, 2, 3, 4, 5]);

	expect(result).toEqual([1, 3, 5]);
});


