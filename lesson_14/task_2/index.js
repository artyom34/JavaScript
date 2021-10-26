let sender = 'Gromcode';

const createMessage = () =>{
	
	let message = 'Just learn it';
	

	function sendMessage(name){
		console.log(name + ', ' + message + '! Your ' + sender);
	}

	function setMessage(text){
		message = text;
	}

	function setSender(text){
		sender.bold(text);
	}

	
	return {
		sendMessage,
		setMessage,
		setSender,
	};
}

const getMessage = createMessage();

getMessage.setSender(sender);
getMessage.setMessage('Good job');
getMessage.sendMessage('Bob');


