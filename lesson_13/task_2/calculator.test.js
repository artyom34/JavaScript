import getSum, {getSquaredArray, getOddNumbers} from './calculator';  

it('should get the sum of two numbers', () =>{
	const result = getSum(2, 12);

	expect(result).toEqual(14);
});

it('should get square of numbers', () =>{
	const result = getSquaredArray([1, 2, 3, 4]);

	expect(result).toEqual([1, 4, 9, 16]);
});

it('should get odd of numbers', () =>{
	const result = getOddNumbers([1, 2, 3, 4]);

	expect(result).toEqual([1, 3]);
});