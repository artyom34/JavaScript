'use strict';

export function finishList(){
	const list = document.querySelector('.list');
	const specialClass = document.querySelector('.special');

	let elementList1 = document.createElement('li');
	elementList1.textContent = '1';
	list.prepend(elementList1);

	let elementList4 = document.createElement('li');
	elementList4.textContent = '4';
	specialClass.before(elementList4);

	let elementList6 = document.createElement('li');
	elementList6.textContent = '6';
	specialClass.after(elementList6);

	let elementList8 = document.createElement('li');
	elementList8.textContent = '8';
	list.append(elementList8);
}

finishList();