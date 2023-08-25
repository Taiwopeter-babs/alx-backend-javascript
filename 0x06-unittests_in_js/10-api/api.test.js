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
  });
});

describe('API route pattern', function () {

  it('Integration API test - correct routing pattern', function (done) {

    request('http://localhost:7865/cart/3', function (error, response, body) {

      // console.log(response.statusCode, body, error);
      expect(response.statusCode).to.be.equal(200);
      expect(body).to.be.equal('Payment methods for cart 3');
      done();
    });
  });

  it('Integration API test - incorrect pattern', function (done) {

    request('http://localhost:7865/cart/3d', function (error, response, body) {

      expect(response.statusCode).to.be.equal(404);
      done();
    });
  });
});

describe('Test JSON & body parsing', function () {

  it('JSON response test', function (done) {

    request('http://localhost:7865/available_payments', function (error, response, body) {

      // console.log(response.statusCode, body, error);
      expect(response.statusCode).to.be.equal(200);

      expect(JSON.parse(body)).to.have.deep.property(
        'payment_methods',
        {
          credit_cards: true,
          paypal: false
        });

      done();
    });
  });

  it('Test body parsing', function (done) {

    request({
      method: 'POST',
      url: 'http://localhost:7865/login',
      body: JSON.stringify({ username: 'Betty' }),
      headers: {
        'Content-Type': 'application/json'
      }
    },
      function (error, response, body) {

        expect(response.statusCode).to.be.equal(200);
        expect(body).to.equal('Welcome Betty');
        done();
      });
  });
});