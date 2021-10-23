import getMinSquaredNumber from './getMinSquaredNumber';

it('should get the square of the minimum number', () =>{
	const result = getMinSquaredNumber([2, 3, -5]);

	expect(result).toEqual(4);
});

it('should get the square of the minimum number', () =>{
	const result = getMinSquaredNumber("");

	expect(result).toEqual(null);
});

it('should get the square of the minimum number', () =>{
	const result = getMinSquaredNumber([]);

	expect(result).toEqual(null);
});