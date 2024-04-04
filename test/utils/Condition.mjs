var random = function(){
    var keys = Object.keys(this);
    const index = keys.indexOf("random");
    if (index > -1) { 
        keys.splice(index, 1); 
    }
    return this[keys[ keys.length * Math.random() << 0]];
}

/**
 * @typedef {Object} CountryType
 * @property {string} AF
 * @property {string} AX
 * @property {string} AL
 * @property {string} DZ
 * @property {string} AS
 * @property {string} AD
 * @property {string} AO
 * @property {string} AI
 * @property {string} AQ
 * @property {string} AG
 * @property {string} AR
 * @property {string} AM
 * @property {string} AW
 * @property {string} AU
 * @property {string} AT
 * @property {string} AZ
 * @property {string} BS
 * @property {string} BH
 * @property {string} BD
 * @property {string} BB
 * @property {string} BY
 * @property {string} BE
 * @property {string} BZ
 * @property {string} BJ
 * @property {string} BM
 * @property {string} BT
 * @property {string} BO
 * @property {string} BQ
 * @property {string} BA
 * @property {string} BW
 * @property {string} BV
 * @property {string} BR
 * @property {string} IO
 * @property {string} BN
 * @property {string} BG
 * @property {string} BF
 * @property {string} BI
 * @property {string} CV
 * @property {string} KH
 * @property {string} CM
 * @property {string} CA
 * @property {string} KY
 * @property {string} CF
 * @property {string} TD
 * @property {string} CL
 * @property {string} CN
 * @property {string} CX
 * @property {string} CC
 * @property {string} CO
 * @property {string} KM
 * @property {string} CG
 * @property {string} CD
 * @property {string} CK
 * @property {string} CR
 * @property {string} CI
 * @property {string} HR
 * @property {string} CU
 * @property {string} CW
 * @property {string} CY
 * @property {string} CZ
 * @property {string} DK
 * @property {string} DJ
 * @property {string} DM
 * @property {string} DO
 * @property {string} EC
 * @property {string} EG
 * @property {string} SV
 * @property {string} GQ
 * @property {string} ER
 * @property {string} EE
 * @property {string} SZ
 * @property {string} ET
 * @property {string} FK
 * @property {string} FO
 * @property {string} FJ
 * @property {string} FI
 * @property {string} FR
 * @property {string} GF
 * @property {string} PF
 * @property {string} TF
 * @property {string} GA
 * @property {string} GM
 * @property {string} GE
 * @property {string} DE
 * @property {string} GH
 * @property {string} GI
 * @property {string} GR
 * @property {string} GL
 * @property {string} GD
 * @property {string} GP
 * @property {string} GU
 * @property {string} GT
 * @property {string} GG
 * @property {string} GN
 * @property {string} GW
 * @property {string} GY
 * @property {string} HT
 * @property {string} HM
 * @property {string} VA
 * @property {string} HN
 * @property {string} HK
 * @property {string} HU
 * @property {string} IS
 * @property {string} IN
 * @property {string} ID
 * @property {string} IR
 * @property {string} IQ
 * @property {string} IE
 * @property {string} IM
 * @property {string} IL
 * @property {string} IT
 * @property {string} JM
 * @property {string} JP
 * @property {string} JE
 * @property {string} JO
 * @property {string} KZ
 * @property {string} KE
 * @property {string} KI
 * @property {string} KP
 * @property {string} KR
 * @property {string} KW
 * @property {string} KG
 * @property {string} LA
 * @property {string} LV
 * @property {string} LB
 * @property {string} LS
 * @property {string} LR
 * @property {string} LY
 * @property {string} LI
 * @property {string} LT
 * @property {string} LU
 * @property {string} MO
 * @property {string} MG
 * @property {string} MW
 * @property {string} MY
 * @property {string} MV
 * @property {string} ML
 * @property {string} MT
 * @property {string} MH
 * @property {string} MQ
 * @property {string} MR
 * @property {string} MU
 * @property {string} YT
 * @property {string} MX
 * @property {string} FM
 * @property {string} MD
 * @property {string} MC
 * @property {string} MN
 * @property {string} ME
 * @property {string} MS
 * @property {string} MA
 * @property {string} MZ
 * @property {string} MM
 * @property {string} NA
 * @property {string} NR
 * @property {string} NP
 * @property {string} NL
 * @property {string} NC
 * @property {string} NZ
 * @property {string} NI
 * @property {string} NE
 * @property {string} NG
 * @property {string} NU
 * @property {string} NF
 * @property {string} MK
 * @property {string} MP
 * @property {string} NO
 * @property {string} OM
 * @property {string} PK
 * @property {string} PW
 * @property {string} PS
 * @property {string} PA
 * @property {string} PG
 * @property {string} PY
 * @property {string} PE
 * @property {string} PH
 * @property {string} PN
 * @property {string} PL
 * @property {string} PT
 * @property {string} PR
 * @property {string} QA
 * @property {string} RE
 * @property {string} RO
 * @property {string} RU
 * @property {string} RW
 * @property {string} BL
 * @property {string} SH
 * @property {string} KN
 * @property {string} LC
 * @property {string} MF
 * @property {string} PM
 * @property {string} VC
 * @property {string} WS
 * @property {string} SM
 * @property {string} ST
 * @property {string} SA
 * @property {string} SN
 * @property {string} RS
 * @property {string} SC
 * @property {string} SL
 * @property {string} SG
 * @property {string} SX
 * @property {string} SK
 * @property {string} SI
 * @property {string} SB
 * @property {string} SO
 * @property {string} ZA
 * @property {string} GS
 * @property {string} SS
 * @property {string} ES
 * @property {string} LK
 * @property {string} SD
 * @property {string} SR
 * @property {string} SJ
 * @property {string} SE
 * @property {string} CH
 * @property {string} SY
 * @property {string} TW
 * @property {string} TJ
 * @property {string} TZ
 * @property {string} TH
 * @property {string} TL
 * @property {string} TG
 * @property {string} TK
 * @property {string} TO
 * @property {string} TT
 * @property {string} TN
 * @property {string} TR
 * @property {string} TM
 * @property {string} TC
 * @property {string} TV
 * @property {string} UG
 * @property {string} UA
 * @property {string} AE
 * @property {string} GB
 * @property {string} US
 * @property {string} UM
 * @property {string} UY
 * @property {string} UZ
 * @property {string} VU
 * @property {string} VE
 * @property {string} VN
 * @property {string} VG
 * @property {string} VI
 * @property {string} WF
 * @property {string} EH
 * @property {string} YE
 * @property {string} ZM
 * @property {string} ZW
 * @property {Function<string>} random
 */
/**
 * @typedef {Object} PlatformType
 * @property {string} android
 * @property {string} ios
 * @property {string} web
 * @property {Function<string>} random
 */
/**
 * @typedef {Object} GenderType
 * @property {string} M
 * @property {string} F
 * @property {Function<string>} random
 */
/**
 * @typedef {Object} Condition
 * @property {number} adId
 * @property {number} ageStart
 * @property {number} ageEnd
 * @property {Gender} gender
 * @property {Array<Country>} country
 * @property {Array<Platform>} platform
 */

/**@type {CountryType} */
var Country = {
    AF: 'AF',
    AX: 'AX',
    AL: 'AL',
    DZ: 'DZ',
    AS: 'AS',
    AD: 'AD',
    AO: 'AO',
    AI: 'AI',
    AQ: 'AQ',
    AG: 'AG',
    AR: 'AR',
    AM: 'AM',
    AW: 'AW',
    AU: 'AU',
    AT: 'AT',
    AZ: 'AZ',
    BS: 'BS',
    BH: 'BH',
    BD: 'BD',
    BB: 'BB',
    BY: 'BY',
    BE: 'BE',
    BZ: 'BZ',
    BJ: 'BJ',
    BM: 'BM',
    BT: 'BT',
    BO: 'BO',
    BQ: 'BQ',
    BA: 'BA',
    BW: 'BW',
    BV: 'BV',
    BR: 'BR',
    IO: 'IO',
    BN: 'BN',
    BG: 'BG',
    BF: 'BF',
    BI: 'BI',
    CV: 'CV',
    KH: 'KH',
    CM: 'CM',
    CA: 'CA',
    KY: 'KY',
    CF: 'CF',
    TD: 'TD',
    CL: 'CL',
    CN: 'CN',
    CX: 'CX',
    CC: 'CC',
    CO: 'CO',
    KM: 'KM',
    CG: 'CG',
    CD: 'CD',
    CK: 'CK',
    CR: 'CR',
    CI: 'CI',
    HR: 'HR',
    CU: 'CU',
    CW: 'CW',
    CY: 'CY',
    CZ: 'CZ',
    DK: 'DK',
    DJ: 'DJ',
    DM: 'DM',
    DO: 'DO',
    EC: 'EC',
    EG: 'EG',
    SV: 'SV',
    GQ: 'GQ',
    ER: 'ER',
    EE: 'EE',
    SZ: 'SZ',
    ET: 'ET',
    FK: 'FK',
    FO: 'FO',
    FJ: 'FJ',
    FI: 'FI',
    FR: 'FR',
    GF: 'GF',
    PF: 'PF',
    TF: 'TF',
    GA: 'GA',
    GM: 'GM',
    GE: 'GE',
    DE: 'DE',
    GH: 'GH',
    GI: 'GI',
    GR: 'GR',
    GL: 'GL',
    GD: 'GD',
    GP: 'GP',
    GU: 'GU',
    GT: 'GT',
    GG: 'GG',
    GN: 'GN',
    GW: 'GW',
    GY: 'GY',
    HT: 'HT',
    HM: 'HM',
    VA: 'VA',
    HN: 'HN',
    HK: 'HK',
    HU: 'HU',
    IS: 'IS',
    IN: 'IN',
    ID: 'ID',
    IR: 'IR',
    IQ: 'IQ',
    IE: 'IE',
    IM: 'IM',
    IL: 'IL',
    IT: 'IT',
    JM: 'JM',
    JP: 'JP',
    JE: 'JE',
    JO: 'JO',
    KZ: 'KZ',
    KE: 'KE',
    KI: 'KI',
    KP: 'KP',
    KR: 'KR',
    KW: 'KW',
    KG: 'KG',
    LA: 'LA',
    LV: 'LV',
    LB: 'LB',
    LS: 'LS',
    LR: 'LR',
    LY: 'LY',
    LI: 'LI',
    LT: 'LT',
    LU: 'LU',
    MO: 'MO',
    MG: 'MG',
    MW: 'MW',
    MY: 'MY',
    MV: 'MV',
    ML: 'ML',
    MT: 'MT',
    MH: 'MH',
    MQ: 'MQ',
    MR: 'MR',
    MU: 'MU',
    YT: 'YT',
    MX: 'MX',
    FM: 'FM',
    MD: 'MD',
    MC: 'MC',
    MN: 'MN',
    ME: 'ME',
    MS: 'MS',
    MA: 'MA',
    MZ: 'MZ',
    MM: 'MM',
    NA: 'NA',
    NR: 'NR',
    NP: 'NP',
    NL: 'NL',
    NC: 'NC',
    NZ: 'NZ',
    NI: 'NI',
    NE: 'NE',
    NG: 'NG',
    NU: 'NU',
    NF: 'NF',
    MK: 'MK',
    MP: 'MP',
    NO: 'NO',
    OM: 'OM',
    PK: 'PK',
    PW: 'PW',
    PS: 'PS',
    PA: 'PA',
    PG: 'PG',
    PY: 'PY',
    PE: 'PE',
    PH: 'PH',
    PN: 'PN',
    PL: 'PL',
    PT: 'PT',
    PR: 'PR',
    QA: 'QA',
    RE: 'RE',
    RO: 'RO',
    RU: 'RU',
    RW: 'RW',
    BL: 'BL',
    SH: 'SH',
    KN: 'KN',
    LC: 'LC',
    MF: 'MF',
    PM: 'PM',
    VC: 'VC',
    WS: 'WS',
    SM: 'SM',
    ST: 'ST',
    SA: 'SA',
    SN: 'SN',
    RS: 'RS',
    SC: 'SC',
    SL: 'SL',
    SG: 'SG',
    SX: 'SX',
    SK: 'SK',
    SI: 'SI',
    SB: 'SB',
    SO: 'SO',
    ZA: 'ZA',
    GS: 'GS',
    SS: 'SS',
    ES: 'ES',
    LK: 'LK',
    SD: 'SD',
    SR: 'SR',
    SJ: 'SJ',
    SE: 'SE',
    CH: 'CH',
    SY: 'SY',
    TW: 'TW',
    TJ: 'TJ',
    TZ: 'TZ',
    TH: 'TH',
    TL: 'TL',
    TG: 'TG',
    TK: 'TK',
    TO: 'TO',
    TT: 'TT',
    TN: 'TN',
    TR: 'TR',
    TM: 'TM',
    TC: 'TC',
    TV: 'TV',
    UG: 'UG',
    UA: 'UA',
    AE: 'AE',
    GB: 'GB',
    US: 'US',
    UM: 'UM',
    UY: 'UY',
    UZ: 'UZ',
    VU: 'VU',
    VE: 'VE',
    VN: 'VN',
    VG: 'VG',
    VI: 'VI',
    WF: 'WF',
    EH: 'EH',
    YE: 'YE',
    ZM: 'ZM',
    ZW: 'ZW',
    random: ()=>{
        return random.bind(Country)()
    }
}
/**@type {PlatformType} */
var Platform = {
    android: 'android',
    ios: 'ios',
    web: 'web',
    random: ()=>{
        return random.bind(Platform)()
    }
}
/**@type {GenderType} */
var Gender = {
    M: 'M',
    F: 'F',
    random: ()=>{
        return random.bind(Gender)()
    }
}



/** @returns {boolean} */
function randomBool() {
	return Math.random() >= 0.5;
}

/** @returns {Array<number>[2]} */
function randomAgeRange() {
	var a = -1, b = -1;
	var result = [];
	while (a == b) {
		a = Math.floor(Math.random() * 99) + 1;
		b = Math.floor(Math.random() * 99) + 1;
		if (a > b) {
			result = [b, a];
		}
		else {
			result = [a, b];
		}
	}
	return result;
}

/** @returns {Array<Country>} */
function randomCountries() {
	var result = [];
	var countryCount = Math.floor(Math.random() * 100);
	for (var i = 0; i < countryCount; i++) {
		var randomCountry = Country.random();
		if (result.includes(randomCountry)) continue;
		result.push(Country.random());
	}
	return result;
}

/** @returns {Array<Platform>} */
function randomPlatforms() {
	var result = [];
	var platformCount = Math.floor(Math.random() * 3);
	for (var i = 0; i < platformCount; i++) {
		var randomPlatform = Platform.random();
		if (result.includes(randomPlatform)) continue;
		result.push(randomPlatform);
	}
	return result;
}

/** @returns {Condition} */
function generateEachCondition() {
	var result = {}
	if (randomBool()) {
		var age = randomAgeRange();
		result.ageStart = age[0];
		result.ageEnd = age[1];
	}
	if (randomBool()) {
		result.gender = Gender.random();
	}
	if (randomBool()) {
		result.country = randomCountries();
		if (result.country.length == 0) delete result.country;
	}
	if (randomBool()) {
		result.platform = randomPlatforms();
		if (result.platform.length == 0) delete result.platform;
	}
	return result;
}

/**
 * @param {Number} count 
 * @returns {Array<Condition>}
 */
function generateRandomConditions(count) {
	var result = [];
	for (var i = 0; i < count; i++) {
		var condition = generateEachCondition()
		if (Object.keys(condition).length == 0) continue;
		result.push(condition);
	}
	return result;
}



export {Country, Platform, Gender, generateRandomConditions}