
describe("Helper test (with setup and tear-down)", function() {
  beforeEach(function () {
    allPayments={
      payment1:{billAmt:"100",tipAmt:"20",tipPercent:"20"},
      payment2:{billAmt:"50",tipAmt:"10",tipPercent:"20"}
    };
  });

  it('should sum total from allPayments objects on sumPaymentTotal()', function () {
    expect(sumPaymentTotal("tipAmt")).toEqual(30);
    expect(sumPaymentTotal("billAmt")).toEqual(150);
    expect(sumPaymentTotal("tipPercent")).toEqual(40);
  });

  it('should calculate tip percentage on calculateTipPercent()', function () {
    expect(calculateTipPercent(100,20)).toEqual(20);
    expect(calculateTipPercent(50,10)).toEqual(20);
  });

  it("should append a newly created td element to the table row on appendTD()", function(){
    let tr=document.createElement("tr");
    appendTd(tr,"Test Data");
    expect(tr.childElementCount).toEqual(1);
    expect(tr.firstChild.innerText).toEqual("Test Data");
  })

  afterEach(function() {
  allPayments={};
  });
});

/// etc
