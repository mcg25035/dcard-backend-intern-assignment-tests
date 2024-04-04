import { Country, Gender, Platform } from './Condition.mjs';

var userId = 0;

/**
 * @typedef {Object} User
 * @property {Number} age
 * @property {Gender} gender
 * @property {Country} country
 * @property {Platform} platform
 */

/** @returns {User} */


export class User{
	/**@type {User} */
	static users = {};
	/**@type {Number} */
	static userId = 0;
	/**@type {Number} */
	id;
	/**@type {Number} */
	age;
	/**@type {Gender} */
	gender;
	/**@type {Country} */
	country;
	/**@type {Platform} */
	platform;

	constructor(){
		// var id = userId;
		// userId++;
		this.id = User.userId++;
		this.age = Math.floor(Math.random() * 99) + 1;
		this.gender = Gender.random();
		this.country = Country.random();
		this.platform = Platform.random();
		User.users[this.id] = this;
	}
	 
}


export default User;