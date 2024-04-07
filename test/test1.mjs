import { expect, use } from 'chai';
import chaiHttp from 'chai-http';
import { formatAd, formatUser, logAPIReturns, objectInArray, sleep } from './utils/testUtils.mjs';
import { Ad } from './utils/Ad.mjs';
import User from './utils/User.mjs';
import { getParamFromUser } from './utils/QueryParam.mjs';
import { before, describe } from 'node:test';

var request = use(chaiHttp).request;
const serverUrl = 'http://localhost:3000';

describe('Create API Test', () => {
    for (var i = 0; i < 1000; i++) {
        (function(){
            var ad = new Ad(
                "AD " + i,
                new Date(),
                new Date(new Date().getTime() + 20*1000)
            )
            var adInfo = formatAd(ad, 2);
            it(`ad ${ad.id} | ${adInfo}`, (done) => {
                var postBody = ad.getAsRequestBody();
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
			avaliableAds.sort((a, b) => {
				if (a.title < b.title) return -1;
				if (a.title > b.title) return 1;
				return 0;
			})
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
						// logAPIReturns(res.body);
						expect(res).to.have.status(200);
						expect(res.body).to.be.an('array');
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