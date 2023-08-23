const { describe, it } = require('mocha');
const expect = require("chai").expect;
const sinon = require('sinon');
const assert = require('assert');

const Utils = require('./utils');
const sendPaymentRequestToApi = require('./4-payment');

describe('stub calculateNumber', function () {
  it('\'calculateNumber\'', function () {
    const calNumstub = sinon.stub(Utils, 'calculateNumber').returns(10);
    const logSpy = sinon.spy(console, 'log');


    console.log(`The total is: ${Utils.calculateNumber('SUM', 100, 20)}`);

    expect(calNumstub.firstCall.args[0]).to.be.equal('SUM');
    expect(calNumstub.firstCall.args[1]).to.be.equal(100);
    expect(calNumstub.firstCall.args[2]).to.be.equal(20);

    assert(logSpy.calledWith(`The total is: ${10}`));

    logSpy.restore();
  });
});