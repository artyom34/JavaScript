export function squaredNumbers(){

	const elems = document.querySelectorAll('.number');
	elems.forEach(element =>{
		element.dataset.squaredNumber =
		element.dataset.number * element.dataset.number;
	});
}


squaredNumbers();