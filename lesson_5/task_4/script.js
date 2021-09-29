
function compareSums(a, b, c, d){

	if(sum(a, b) > sum(c, d)){
		return true;
	}
	return false;
}

const sum = (from, to) => from + to;

alert(compareSums(2, 10, 10, 0));