import { cleanTransactionsList } from "./index.js";

it('should get clean transactions list', () =>{
	const result = cleanTransactionsList(['12 ', 'asd', "1"]);

	expect(result).toEqual(['$12.00', '$1.00']);
});