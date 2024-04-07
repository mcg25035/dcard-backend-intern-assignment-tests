import { Country, Gender, Platform } from './Condition.mjs';

export function sleep(ms) {
	return new Promise((resolve) => {
		setTimeout(resolve, ms);
	});
}

export function objectEqual(obj1, obj2) {
	if (Object.keys(obj1).length != Object.keys(obj2).length) return false;
	for (var key in obj1) {
		if (obj1[key] != obj2[key]) return false;
	}
	return true;
}

export function objectInArray(obj, array){
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
export function multiplyTab(tabLevel){
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
export function formatAd(ad, tabLevel){
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

export function formatUser(user){
	var result = "";
	result += `age: ${user.age}, gender: ${user.gender}, country: ${user.country}, platform: ${user.platform}`;
	return result;
}

/**
 * @param {Array<Country>} countries 
 */
export function formatCountries(countries){
	var result = "";
	for (var country of countries){
		result += country + ", ";
	}
	result = result.slice(0, -2);
	return result;
}

export function logAPIReturns(ads){
	var result = "";
	for (var ad of ads){
		result += ad.title + ", ";
	}
	result = result.slice(0, -2);
	console.log("apiReturnsAd", result);
}