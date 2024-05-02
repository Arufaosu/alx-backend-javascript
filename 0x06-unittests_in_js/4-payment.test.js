const sinon = require('sinon');
const expect = require('chai').expect;
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./4-payment');

describe('Test sendPaymentRequestToApi behavior', () => {
  it('Test with sendPaymentRequestToApi(100, 20)', () => {
    const stubCalculateNumber = sinon.stub(Utils, 'calculateNumber');
    stubCalculateNumber.returns(10);

    const spyConsoleLog = sinon.spy(console, 'log')

    sendPaymentRequestToApi(100, 20);

    expect(stubCalculateNumber.calledOnceWithExactly('SUM', 100, 20)).to.be.true;
    expect(spyConsoleLog.calledOnceWithExactly('The total is: 10')).to.be.true;

    stubCalculateNumber.restore();
    spyConsoleLog.restore();
  });
});
