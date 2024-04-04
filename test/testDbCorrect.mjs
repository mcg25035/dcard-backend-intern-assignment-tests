import { expect, use } from 'chai';
import chaiHttp from 'chai-http';
import { Country, Gender, Platform } from './utils/Condition.mjs';
import { Ad } from './utils/Ad.mjs';
import User from './utils/User.mjs';
import { getParamFromUser } from './utils/QueryParam.mjs';

var request = use(chaiHttp).request;


const serverUrl = 'http://localhost:3000'; // Adjust port if your Go server runs on a different one

function sleep(ms) {
	return new Promise((resolve) => {
		setTimeout(resolve, ms);
	});
}

function objectEqual(obj1, obj2) {
	if (Object.keys(obj1).length != Object.keys(obj2).length) return false;
	for (var key in obj1) {
		if (obj1[key] != obj2[key]) return false;
	}
	return true;
}

function objectInArray(obj, array){
	var result = false;
	for (var item of array){
		if (!objectEqual(obj, item)) continue;
		result = true;
	}
	return result;
}

/**
 * @param {Number} tabLevel 
 */
function multiplyTab(tabLevel){
	var result = "";
	for (var i = 0; i < tabLevel; i++){
		result += "    ";
	}
	return result;
}

/**
 * @param {Ad} ad 
 * @param {Number} tabLevel
 */
function formatAd(ad, tabLevel){
	var result = "";
	result += `startAt: ${ad.startAt.toISOString()} | endAt: ${ad.endAt.toISOString()}`;
	var lineStart = `\n${multiplyTab(tabLevel+1)}`;
	var indx = 0;
	for (var condition of ad.conditions){
		indx++;
		result += `\n${multiplyTab(tabLevel)}----------Condition-${indx}-----------`
		result += lineStart;
		var newLine = false
		if (condition.ageStart && condition.ageEnd){
			result += `age: ${condition.ageStart} - ${condition.ageEnd}   `;
			newLine = true;
		}
		if (condition.gender){
			result += `gender: ${condition.gender} `;
			newLine = true;
		}
		if (condition.platform){
			result += `platform: ${condition.platform} `;
			newLine = true;
		}
		if (condition.country){
			if (newLine) result += lineStart;
			result += `country: ${formatCountries(condition.country)} `;
		}
	}
	return result+"\n\n";
}

function formatUser(user){
	var result = "";
	result += `age: ${user.age}, gender: ${user.gender}, country: ${user.country}, platform: ${user.platform}`;
	return result;
}

/**
 * @param {Array<Country>} countries 
 */
function formatCountries(countries){
	var result = "";
	for (var country of countries){
		result += country + ", ";
	}
	result = result.slice(0, -2);
	return result;
}

describe('Create API Test', () => {
	for (var i = 0; i < 30; i++) {
		(function(){
			var ad = new Ad(
				"AD " + i,
				new Date(),
				new Date(new Date().getTime() + 10 * 1000)
			)
			var adInfo = formatAd(ad, 2);
			it(`ad ${ad.id} | ${adInfo}`, (done) => {
				var postBody = ad.getAsRequestBody();
				// console.group()
				// console.group()
				// console.log(postBody)
				// console.groupEnd()
				// console.groupEnd()
				request(serverUrl)
					.post('/api/v1/ad')
					.send(postBody)
					.end((err, res) => {
						expect(res).to.have.status(200);
						done();
					})
					
			})
		})()
	}
})

describe('Public API Test', () => {
	for (var i = 0; i < 10; i++){
		(function(){
			var user = new User();
			var avaliableAds = Ad.findAvaliableAds(
				user.age,
				user.gender,
				user.country,
				user.platform
			)
			var adsTitle = [];
			for (var ad of avaliableAds){
				adsTitle.push(ad.title);
			}
			it(`user ${i} ${formatUser(user)} \n`+
			   `      should get ${adsTitle}\n`, (done) => {
				var param = getParamFromUser(user, 0, 3000);
				request(serverUrl)
					.get('/api/v1/ad')
					.query(param)
					.end((err, res) => {
						expect(res).to.have.status(200);
						expect(res.body).to.be.an('array');
						// console.log("apiReturnsAd", res.body)
						// console.log("avaliableAds", avaliableAds)
						for (var ad of res.body) {
							expect(ad).to.have.property('title');
							expect(ad).to.have.property('endAt');
							expect(objectInArray(ad, avaliableAds)).to.be.true;
						}
						expect(res.body.length).to.be.equal(avaliableAds.length);
						done();
					})
			})
		})()
		
	}
})

describe('Public API Test with Offset & Limit', () => {
	for (var i = 0; i < 10; i++){
		(function(){
			var user = new User();
			var avaliableAds = Ad.findAvaliableAds(
				user.age,
				user.gender,
				user.country,
				user.platform
			)
			var tmp = [];
			var indx = 0;
			var offsetCount = 0;
			for (var ad of avaliableAds){
				if (indx < 2) {
					indx++;
					continue;
				}
				if (offsetCount >= 6) break;
				tmp.push(ad);
				offsetCount++;
			}
			avaliableAds = tmp;
			var adsTitle = [];
			for (var ad of avaliableAds){
				adsTitle.push(ad.title);
			}
			it(`user ${i} ${formatUser(user)} \n`+
			   `      should get ${adsTitle}\n`, (done) => {
				var param = getParamFromUser(user, 2, 6);
				request(serverUrl)
					.get('/api/v1/ad')
					.query(param)
					.end((err, res) => {
						expect(res).to.have.status(200);
						expect(res.body).to.be.an('array');
						// console.log("apiReturnsAd", res.body)
						// console.log("tmp", avaliableAds)
						// console.log("avaliableAds", avaliableAds)
						for (var ad of res.body) {
							expect(ad).to.have.property('title');
							expect(ad).to.have.property('endAt');
							expect(objectInArray(ad, avaliableAds)).to.be.true;
						}
						expect(res.body.length).to.be.equal(avaliableAds.length);
						done();
					})
			})
		})()
		
	}
})

// describe('Public API Test with Offset & Limit', () => {
// 	for (var i = 0; i < 10; i++){
// 		(function(){
// 			var user = new User();
// 			var avaliableAds = Ad.findAvaliableAds(
// 				user.age,
// 				user.gender,
// 				user.country,
// 				user.platform
// 			)
// 			// var indx = 0;
// 			// var maxCount = 0;
// 			// var tmp = [];
// 			// for (var ad of avaliableAds){
// 			// 	// if (indx < 2) {
// 			// 	// 	indx++;
// 			// 	// 	continue;
// 			// 	// }
// 			// 	// if (maxCount >= 6) break;
// 			// 	tmp.push(ad);
// 			// 	maxCount++;
// 			// }
// 			// var e = avaliableAds;
// 			// avaliableAds = tmp;
// 			var adsTitle = [];
// 			for (var ad of avaliableAds){
// 				adsTitle.push(ad.title);
// 			}
// 			it(`user ${i} ${formatUser(user)} \n`+
// 			   `      should get ${adsTitle}\n`, (done) => {
// 				var param = getParamFromUser(user, 0, 3000);
// 				request(serverUrl)
// 					.get('/api/v1/ad')
// 					.query(param)
// 					.end((err, res) => {
// 						expect(res).to.have.status(200);
// 						expect(res.body).to.be.an('array');
// 						console.log(e)
// 						console.log(avaliableAds)
// 						console.log(res.body)
// 						// console.log("apiReturnsAd", res.body)
// 						// console.log("avaliableAds", avaliableAds)
// 						for (var ad of res.body) {
// 							expect(ad).to.have.property('title');
// 							expect(ad).to.have.property('endAt');
// 							expect(objectInArray(ad, avaliableAds)).to.be.true;
// 						}

// 						expect(res.body.length).to.be.equal(avaliableAds.length);
// 						done();
// 					})
// 			}).timeout(1000000000)
// 		})()
		
// 	}
// })

var timeout20s = false;

describe('Public API Timeout Test (wait 11 second)', () => {
	for (var i = 0; i < 10; i++){
		(function(){
			var user = new User();
			var avaliableAds = Ad.findAvaliableAds(
				user.age,
				user.gender,
				user.country,
				user.platform
			)
			var adsTitle = [];
			for (var ad of avaliableAds){
				adsTitle.push(ad.title);
			}
			it(`user 1${i} after 10s should get no ads avaliable`, (done) => {
				(async function(){
					if (!timeout20s) await sleep(11000);
					timeout20s = true;
					var param = getParamFromUser(user, 0, 3000);
					request(serverUrl)
						.get('/api/v1/ad')
						.query(param)
						.end((err, res) => {
							expect(res).to.have.status(200);
							expect(res.body).to.be.an('array');
							expect(res.body.length).to.be.equal(0);
							done();
						})
				})()
			}).timeout(20000)
		})()	
	}
})