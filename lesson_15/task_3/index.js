'use strict';

export function createLogger(){

	let arrayLoggers = [];

	function warn(msg){
		arrayLoggers.push({message: msg, dateTime: new Date(), type: 'warn'});
	}

	function error(msg){
		arrayLoggers.push({message: msg, dateTime: new Date(), type: 'error'});
	}

	function log(msg){
		arrayLoggers.push({message: msg, dateTime: new Date, type: 'log'});
	}

	function getRecords(type){
		arrayLoggers.sort((elem1, elem2) => elem2.dateTime - elem1.dateTime);

		if(type === undefined){
			return arrayLoggers;
		}	

		return arrayLoggers.filter(item => item.type === type);
	}

	return {
		warn,
		log,
		error,
		getRecords,
	};
}

// const loger = createLogger();

// loger.log('User logger in');
// loger.warn('User try to restricted page');
// loger.log('User logged out');
// loger.error('Unexpected error on the site');
// loger.getRecords();

console.log(createLogger());

