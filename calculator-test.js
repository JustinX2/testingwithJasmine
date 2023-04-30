
it('should calculate the monthly rate correctly for a 30 year mortgage', function () {
  const values={
    amount:100000;
    years:30;
    rate:4;
  };
  expect(calculateMonthlyPayment(values)).toEqual("477.42");
});

it("should return a result with 2 decimal places", function() {
  const values = {
    amount: 100000,
    years: 15,
    rate: 4,
  };
  expect(calculateMonthlyPayment(values)).toEqual("739.69")
});

/// etc
