const { describe, it, beforeEach, afterEach } = require('mocha');
const expect = require("chai").expect;
const sinon = require('sinon');
const assert = require('assert');

const sendPaymentRequestToApi = require('./4-payment');

describe('stub calculateNumber', function () {

  let logSpy;
  beforeEach(function () {
    logSpy = sinon.spy(console, 'log');
  });

  afterEach(function () {
    return logSpy.restore();
  })
  it('\'logs the correct result: 120\'', function () {

    sendPaymentRequestToApi(100, 20);

    expect(logSpy.calledWith(`The total is: ${120}`)).to.be.true;
    expect(logSpy.calledOnce).to.be.true;

  });

  it('\'logs the correct result: 20\'', function () {

    sendPaymentRequestToApi(10, 10);

    expect(logSpy.calledWith(`The total is: ${20}`)).to.be.true;
    expect(logSpy.calledOnce).to.be.true;

  });
});