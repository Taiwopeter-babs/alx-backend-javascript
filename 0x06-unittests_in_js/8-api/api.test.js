const expect = require('chai').expect;
const { describe, it } = require('mocha');
const request = require('request');


describe('Index page', function () {

  it('Integration API test', function (done) {

    request('http://localhost:7865', function (error, response, body) {

      expect(response.statusCode).to.be.equal(200);
      expect(body).to.be.equal('Welcome to the payment system');
      done();
    });
  })
})