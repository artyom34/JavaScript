
function getSection(num){

	const element = document.querySelector(`span[data-number= '${num}']`); 	
	const parentElem = element.closest('.box');

	return parentElem.dataset.section;
}

let elem = getSection(2);

console.log(elem);