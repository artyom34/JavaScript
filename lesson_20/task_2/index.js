'use strict';

class User{
	
	constructor(id, name, sessionId){
		this._id = id;
		this._name = name;
		this._sessionId = sessionId;
	}

	get id(){
		return this._id;
	}	

	get name(){
		return this._name;
	}

	get sessionId(){
		return this._sessionId;
	}
}

class UserRepository{
	constructor(users){
	this._users = Object.freeze(users);
	}

	get users(){
		return this._users;
	}

	getUserNames(){
			return this._users.map(({name}) => name);
	}

	getUserIds(){
		return this._users.map((userId) => userId._id);
	}

	getUserNameById(userId){
		const user = this._users.find((value) => value._id == userId);
		return user._name;
	}
}

const objArray =  [new User('12', 'Artyom', 'session-id'),
new User('8', 'Arina', 'session-id'),
new User('22', 'Alex', 'session-id')];

const userName = new User('1223', 'Artyom', 'session-Id')

const userRepos = new UserRepository(objArray);

console.log(userRepos.getUserNames());
console.log(userRepos.getUserIds());
console.log(userRepos.getUserNameById('12'));



