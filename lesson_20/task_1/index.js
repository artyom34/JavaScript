
class Order {

	constructor(price, city, type){
		this.price = price;
		this.city = city;
		this.type = type;
		this.dateCreated = new Date();
		this.id = Math.random() + '';
		this.isConfirmed = false;
		this.dateConfirmed = Date;
	}

	checkPrice(){
		if(this.price > 1000){
			return true;
		}
		return false;
	}

	confirmOrder(){
		if(this.isConfirmed === false){
			this.isConfirmed = true;
			this.dateConfirmed = new Date();
		}
	}

	isValidType(){
		if(this.type === 'Buy' || this.type === 'Sell'){
			return true;
		}
		return false;
	}
}
