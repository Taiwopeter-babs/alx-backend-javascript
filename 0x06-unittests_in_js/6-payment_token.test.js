const { describe, it } = require('mocha');
const expect = require('chai').expect;

const getPaymentTokenFromAPI = require('./6-payment_token');


describe('getPaymentTokenFromAPI', function () {
  it('Test asynchronous promise object', function (done) {
    // this.timeout(50000);
    getPaymentTokenFromAPI(true)
      .then(function (resultObj) {
        expect(resultObj).to.equal({ data: 'Sccessful response from the API' });
        done();
      });
  });
});
