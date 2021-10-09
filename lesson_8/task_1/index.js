'use strict';	

function pickProps(obj, props){
	let newObj = {};
	for(let key in obj){
		for(let i = 0; i < props.length; i++){
			if(key === props[i]){
				newObj[key] = obj[key];
			}
		}
	}
	return newObj;
}

const user = {
	name: 'Artyom',
	id: 1,
};

console.log(pickProps(user, ['name', 'height', 'id']));