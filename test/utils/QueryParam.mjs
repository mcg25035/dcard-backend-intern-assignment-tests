import { User } from "./User.mjs";
import { Country, Gender, Platform } from "./Condition.mjs";

/**
 * @typedef {Object} QueryParam
 * @property {Number} age
 * @property {Gender} gender
 * @property {Country} country
 * @property {Platform} platform
 * @property {Number} offset
 * @property {Number} limit
 */

/**
 * @param {User} user 
 * @param {Number} offset
 * @param {Number} limit
 */
export function getParamFromUser(user, offset, limit) {
    var param = Object.assign({}, user);
    param.offset = offset;
    param.limit = limit;
    return param;
}