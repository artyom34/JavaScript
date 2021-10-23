import { reverseString } from "./index.js";

it('should get reverse of string', () =>{
	const result = reverseString('asdf');

	expect(result).toEqual('fdsa');
});

it('should get reverse of string', () =>{
	const result = reverseString(2);

	expect(result).toEqual(null);
});