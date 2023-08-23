const { describe, it } = require('mocha');
const expect = require("chai").expect;
const calculateNumber = require('./2-calcul_chai');


describe('calculateNumber with type of function', function () {
  it('checks SUM', function () {
    expect(calculateNumber('SUM', 1.4, 4.5)).to.be.equal(6);
  });
  it('checks SUBTRACTION', function () {
    expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.be.equal(-4);
  });
  it('checks DIVISION', function () {
    expect(calculateNumber('DIVIDE', 1.4, 1.1)).to.be.equal(1);
  });
  it('checks DIVISION: denominator value of 0', function () {
    expect(calculateNumber('DIVIDE', 1.5, 0.4)).to.be.equal('Error');
  });
});
