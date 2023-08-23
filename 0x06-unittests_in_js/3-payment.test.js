const { describe, it } = require('mocha');
const expect = require("chai").expect;
const sinon = require('sinon');

const Utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment')

describe('sendPaymentRequestToApi', function () {
  it('\'calculateNumber\' & \'sendPaymentRequestToAPi\' give same result', function () {
    const calSpy = sinon.spy(Utils, 'calculateNumber');
    Utils.calculateNumber('SUM', 100, 20);
    sendPaymentRequestToApi(100, 20);

    expect(calSpy.firstCall.args[0]).to.be.equal('SUM');

    calSpy.restore();
  });
});