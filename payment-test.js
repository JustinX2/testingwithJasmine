
describe("Payment test (with setup and tear-down)", function() {
  beforeEach(function () {
    billAmtInput.value="100";
    tipAmtInput.value='20';
  });

  it('should add a new payment object to allPayments on submitPaymentInfo()', function () {
    submitPaymentInfo();

    expect(Object.keys(allPayments).length).toEqual(1);
    expect(allPayments['payment' + paymentId].billAmt).toEqual('100');
    expect(allPayments['payment' + paymentId].tipAmt).toEqual('20');
    expect(allPayments['payment' + paymentId].tipPercent).toEqual(20);
  });

  it('should return a payment object with billAmt, tipAmt, tipPercent on createPayment()', function () {
    let payment=createCurPayment();

    expect(payment.billAmt).toEqual('100');
    expect(payment.tipAmt).toEqual('20');
    expect(payment).tipPercent.toEqual(20);
  });

  it('should append a new payment row to the payment table on the appendPaymentTable()', function () {
    let payment=createCurPayment();
    appendPaymentTable(payment);

    let paymentRows=paymentTbody.querySelectorAll('tr');
    expect(paymentRows.length).toEqual(1);

    let tdList=paymentRows[0].querySelectorAll('td');
    expect(tdList[0].innerText).toEqual("$100");
    expect(tdList[1].innerText).toEqual("$20");
    expect(tdList[2].innerText).toEqual('20%');
  });

  it('should update summary table on updateSummary()', function () {
    submitPaymentInfo();
    expect(summaryTds[0].innerText).toEqual('$100');
    expect(summaryTds[1].innerText).toEqual('$20');
    expect(summaryTds[2].innerText).toEqual('20%');
  });

  afterEach(function() {
    allPayments={};
    paymentId=0;
    paymentTbody.innerHTML='';
    billAmtInput.value='';
    tipAmtInput.value='';
    for(let td of summaryTds){
      td.innerHTML='';
    }
  });
});

/// etc
