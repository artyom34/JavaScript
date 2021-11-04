
export const user = {
	firstName: '',
	lastName: '',

	getFullName(){
		return `${this.firstName} ${this.lastName}`;
	},
	
	setFullName(fullName){
		let userInfo = fullName.split(' ');
		
		this.firstName = userInfo[0];
		this.lastName = userInfo[1];
	}
}
user.setFullName('John Doe');

let fullName = user.getFullName();

console.log(fullName);