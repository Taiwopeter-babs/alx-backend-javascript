const assert = require('assert');
const { describe, it } = require('mocha');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', function () {
  it('checks rounded numbers correctness', function () {
    assert.equal(calculateNumber(1, 3), 4);
  });
  it('checks rounded numbers correctness: round up', function () {
    assert.equal(calculateNumber(1, 3.7), 5);
  });
  it('checks rounded numbers correctness: round down', function () {
    assert.equal(calculateNumber(1.2, 3.7), 5);
  });
  it('checks rounded numbers correctness for decimal: round up twice', function () {
    assert.equal(calculateNumber(1.5, 3.7), 6);
  });
});
