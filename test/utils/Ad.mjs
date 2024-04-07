import { generateRandomConditions } from "./Condition.mjs";

export class Ad{
    /** @typedef {Object.<Number, Ad>} AdData */
     
    /**
     * @type {AdData}
     * @private
     */
    static adData = {};
    /**@private */
    static adId = 0;

    /**@type {Number} */
    id;
    /**@type {Array<Condition>} */
    conditions;

    /**
     * @param {String} title 
     * @param {Date} startAt 
     * @param {Date} endAt 
     */
    constructor(title, startAt, endAt, conditionCount){
        this.id = Ad.adId++;
        this.title = title;
        this.startAt = startAt;
        this.endAt = endAt;
        var conditionCount = Math.floor(Math.random() * 6);
        this.conditions = generateRandomConditions(conditionCount);
        Ad.adData[this.id] = this;
    }

    /**
     * @typedef {Object} RequestBody
     * @property {String} title
     * @property {Number} startAt
     * @property {Number} endAt
     * @property {Array<Condition>} conditions
     */
    
    /** @returns {RequestBody} */
    getAsRequestBody(){
        return {
            title: this.title,
            startAt: this.startAt.toISOString(),
            endAt: this.endAt.toISOString(),
            conditions: this.conditions
        }
    }

    /**
     * @typedef {Object} ApiResonse
     * @property {String} title
     * @property {String} endAt
     */

    getAsApiResponse(){
        return {
            title: this.title,
            endAt: this.endAt.toISOString()
        }
    }

    /**
     * @param {Number} age 
     * @param {Gender} gender 
     * @param {Country} country 
     * @param {Platform} platform 
     */
    static findAvaliableAds(age, gender, country, platform){
        /**@type {Array<Ad>} */
        var result = [];
	    for (var i in Ad.adData) {
            /**@type {Ad} */
            var ad = Ad.adData[i];
            var conditions = ad.conditions;
	    	var validAd = false;
	    	for (var condition of conditions) {
	    		var validCondition = true;
	    		if (condition.ageStart && condition.ageEnd) {
	    			if (!(condition.ageStart <= age && age <= condition.ageEnd)) {
	    				validCondition = false;
	    				continue;
	    			}
	    		}
	    		if (condition.gender) {
	    			if (!(condition.gender == gender)) {
	    				validCondition = false;
	    				continue;
	    			}
	    		}
	    		if (condition.country) {
	    			if (!(condition.country.includes(country))) {
	    				validCondition = false;
	    				continue;
	    			}
	    		}
	    		if (condition.platform) {
	    			if (!(condition.platform.includes(platform))) {
	    				validCondition = false;
	    				continue;
	    			}
	    		}
	    		if (validCondition) {
	    			validAd = true;
	    			break;
	    		}
	    	}
            if (conditions.length == 0) validAd = true;
            // var now = new Date();
            // var isTimeValid = ad.startAt <= now && now <= ad.endAt;
            // if (!isTimeValid) validAd = false;
	    	if (validAd && !result.includes(ad.id)) {
	    		result.push(ad.getAsApiResponse());
	    	}
	    }
	    return result;
    }

}