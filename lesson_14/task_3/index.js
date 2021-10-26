
let number = 0;

const add = (num) =>{
	number += num;
}

const decrease = (num) =>{
	number -= num;
}

const reset = () =>{
	number = 0;
}

const getMemo = () => {
	return number;
}

export {add, decrease, reset, getMemo};

add(10);

console.log(number);
decrease(3);
console.log(number);
reset();
console.log(number);

console.log(getMemo());
