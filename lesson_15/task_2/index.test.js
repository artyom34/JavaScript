import { createCalculator } from "./index";

it('should get create calculator', () =>{
	const result = createCalculator();

	expect(result).toEqual({add, decrease, reset, getMemo});
}); 