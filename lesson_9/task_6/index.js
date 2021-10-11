'use strict';
const getTotalRevenue = transactions => {
	// put your code here
	if(Array.isArray(transactions)){
		let transactionsForDay = transactions.map(value => value.amount).reduce((a, b) => a + b, 0);
		
		return transactionsForDay;
	}
	return alert('Arror');	
};

// examples
const dayTransactions = [
	{ userId: 22, amount: 60, operation: 'sell' },
	{ userId: 22, amount: 160, operation: 'buy' },
	{ userId: 44, amount: 90, operation: 'sell' },
];

const result = getTotalRevenue(dayTransactions); // ==> 310

console.log(result);