const start = 1;
const end = 1000;

let sum = 0;

for(let i = start; i <= end; i++){
	sum += i;
}

let div = Math.trunc(sum/1234);
let mods = sum % 1234;
console.log(div > mods);