
let message = 'Just learn it';

let sendMessage = name =>{
	const sender = 'Gromcode';

	console.log(`${name}, ${message}! Your ${sender}`);
};

let setMessage = text =>{
	message = text;
};

export { sendMessage, setMessage };

sendMessage('Ann');

setMessage('Good job');

sendMessage('Ann');