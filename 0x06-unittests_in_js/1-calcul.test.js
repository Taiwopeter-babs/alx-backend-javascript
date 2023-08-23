const assert = require('assert');
const { describe, it } = require('mocha');
const calculateNumber = require('./1-calcul');

describe('calculateNumber with type of function', function () {
  it('checks SUM', function () {
    assert.equal(calculateNumber('SUM', 1.4, 4.5), 6);
  });
  it('checks SUBTRACTION', function () {
    assert.equal(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
  });
  it('checks DIVISION', function () {
    assert.equal(calculateNumber('DIVIDE', 1.4, 1.1), 1);
  });
  it('checks DIVISION: denominator value of 0', function () {
    assert.equal(calculateNumber('DIVIDE', 1.5, 0.4), 'Error');
  });
});
