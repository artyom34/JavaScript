	
	export default function createMessenger(){
	
	let message = 'Just learn it';
	let sender = 'Gromcode';

	function sendMessage(name){
		console.log(`${name}, ${message}! Your ${sender}`);
	}

	function setMessage(text){
		message = text;
	}

	function setSender(nameAutor){
		sender = nameAutor;
	}

	return {
		sendMessage,
		setMessage,
		setSender,
	};
}

createMessenger().setSender('Hi');
createMessenger().setMessage('Good job');
createMessenger().sendMessage('Bob');


