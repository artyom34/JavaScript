'use strict';

function withdraw(clients, balances, client, amount){

	for(let i = 0; i < client.length; i++){

		if(client === clients[i]){
			
			for(let j = 0; j < balances.length; j++){
				if(i === j){
					if(balances[j] > amount){
						return balances[j] - amount;
					}
					else{
						return -1;
					}
				}
			}
		}
	}
}


console.log(withdraw(['Lidiya', 'Alex', "Vova"], [1000, 200, 300], "Vova", 200));
console.log(withdraw(['Lidiya', 'Alex', "Vova"], [1000, 200, 300], "Vova", 200));
