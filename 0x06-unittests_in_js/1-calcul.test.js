const assert = require('assert');
const calculateNumber = require('./1-calcul.js');

describe('calculateNumber - SUM', () => {
  it('should return 6 when rounding 1.4 and 4.5', () => {
    assert.strictEqual(calculateNumber('SUM', 1.4, 4.5), 6);
  });

  it('should return 9 when rounding 3.5 and 4.5', () => {
    assert.strictEqual(calculateNumber('SUM', 3.5, 4.5), 9);
  });
});

describe('calculateNumber - SUBTRACT', () => {
  it('should return -4 when rounding 1.4 and 4.5', () => {
    assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
  });

  it('should return 0 when rounding 4.5 and 4.5', () => {
    assert.strictEqual(calculateNumber('SUBTRACT', 4.5, 4.5), 0);
  });
});

describe('calculateNumber - DIVIDE', () => {
  it('should return 0.2 when rounding 1.4 and 4.5', () => {
    assert.strictEqual(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
  });

  it('should return "Error" when rounding 1.4 and 0', () => {
    assert.strictEqual(calculateNumber('DIVIDE', 1.4, 0), 'Error');
  });

  it('should return 1 when rounding 4.5 and 4.5', () => {
    assert.strictEqual(calculateNumber('DIVIDE', 4.5, 4.5), 1);
  });
});
