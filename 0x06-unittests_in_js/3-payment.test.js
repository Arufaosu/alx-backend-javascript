const sinon = require('sinon');
const chai = require('chai');
const expect = chai.expect;
const Utils = require('./utils');
const { sendPaymentRequestToApi } = require('./3-payment');

describe('sendPaymentRequestToApi', () => {
  let calculateNumberSpy;

  beforeEach(() => {
    calculateNumberSpy = sinon.spy(Utils, 'calculateNumber');
  });

  afterEach(() => {
    calculateNumberSpy.restore();
  });

  it('should call calculateNumber with the correct arguments', () => {
    sendPaymentRequestToApi(100, 20);

    expect(calculateNumberSpy.calledOnce).to.be.true;
    expect(calculateNumberSpy.calledWith('SUM', 100, 20)).to.be.true;
  });
});
