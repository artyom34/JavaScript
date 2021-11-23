'use strict';

export function finishForm(){
	const form = document.querySelector('.login-form');
	let login = document.createElement('input');
	login.type = 'text';
	login.setAttribute('name', 'login');
	form.prepend(login);

	const password = document.querySelector('[name = password]');
	password.type = 'password';
}

finishForm();