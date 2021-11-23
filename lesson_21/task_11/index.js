'use strict';

export function manageClasses(){
	const elem1 = document.querySelector('.one');
	elem1.setAttribute('class', 'one selected');

	const elem2 = document.querySelector('.two');
	elem2.setAttribute('class', 'two');

	const elem3 = document.querySelector('.three');
	elem3.classList.toggle('three_done');

	const elem4 = document.querySelector('.four');

	if(elem4.classList.contains('some-class')){
		elem4.classList.add('another-class');
	}
}

manageClasses();