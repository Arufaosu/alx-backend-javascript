const chai = require('chai');
const expect = chai.expect;
const calculateNumber = require('./2-calcul_chai.js');

describe('calculateNumber - SUM', () => {
  it('should return 6 when rounding 1.4 and 4.5', () => {
    expect(calculateNumber('SUM', 1.4, 4.5)).to.equal(6);
  });

  it('should return 9 when rounding 3.5 and 4.5', () => {
    expect(calculateNumber('SUM', 3.5, 4.5)).to.equal(9);
  });
});

describe('calculateNumber - SUBTRACT', () => {
  it('should return -4 when rounding 1.4 and 4.5', () => {
    expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4);
  });

  it('should return 0 when rounding 4.5 and 4.5', () => {
    expect(calculateNumber('SUBTRACT', 4.5, 4.5)).to.equal(0);
  });
});

describe('calculateNumber - DIVIDE', () => {
  it('should return 0.2 when rounding 1.4 and 4.5', () => {
    expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.be.closeTo(0.2, 0.01);
  });

  it('should return "Error" when rounding 1.4 and 0', () => {
    expect(calculateNumber('DIVIDE', 1.4, 0)).to.equal('Error');
  });

  it('should return 1 when rounding 4.5 and 4.5', () => {
    expect(calculateNumber('DIVIDE', 4.5, 4.5)).to.equal(1);
  });
});
