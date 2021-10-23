import {calc} from './calculator.js'

it('get sum of numbers', () =>{
	const result = calc('2 + 4');

	expect(result).toEqual('2 + 4 = 6');
});

it('get sum of numbers', () =>{
	const result = calc('2 - 4');

	expect(result).toEqual('2 - 4 = -2');
});

it('get sum of numbers', () =>{
	const result = calc('2 * 4');

	expect(result).toEqual('2 * 4 = 8');
});

it('get sum of numbers', () =>{
	const result = calc('2 / 4');

	expect(result).toEqual('2 / 4 = 0.5');
});

it('get sum of numbers', () =>{
	const result = calc(2);

	expect(result).toEqual(null);
});


