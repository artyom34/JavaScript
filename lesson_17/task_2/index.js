'use strict'; 

export const callbackPrompt = {
	message: 'Tell me yor number',
	
	showPrompt() {
		let telepone = prompt(`${this.message}`);
		console.log(telepone);
	},

	showDeferredPrompt(ms){
		setTimeout(this.showPrompt.bind(this), ms);
	}
};

callbackPrompt.showDeferredPrompt(2000);
