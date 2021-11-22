'use strict';

export function setButton(buttonText){
	document.querySelector('body').innerHTML = `<button>${buttonText}</button>`;
}

setButton('Button text');