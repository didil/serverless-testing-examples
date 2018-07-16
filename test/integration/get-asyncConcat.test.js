const request = require('supertest');
const expect = require('chai').expect;
const getSlsOfflinePort = require('../support/getSlsOfflinePort');

describe('getAsyncConcat', function getAsyncConcatTest() {

  it('ok', function it(done) {
    request(`http://localhost:${getSlsOfflinePort()}`)
      .get(`/asyncConcat?a=it&b=works`)
      .expect(200)
      .end(function (error, result) {
        if (error) {
          return done(error);
        }

        expect(result.body.result).to.deep.eq("it works");
        done();
      });
  });

});