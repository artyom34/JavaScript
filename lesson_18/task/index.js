
export function saveCalls(func){

	withMemory.calls = [];

	function withMemory(...args){
		withMemory.calls.push(args);
		return func.apply(this, arguments);
	}
	return withMemory;
}

function test(a, b){
	return Math.sqrt(a * a + b * b);
}

const testWithMemory = saveCalls(test);

testWithMemory(4, 2);

console.log(testWithMemory.calls);
