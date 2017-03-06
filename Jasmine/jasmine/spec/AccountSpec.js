describe("Account", function() {

  beforeEach(function() {
    account = new Account();
  });

  it("will initialize with an empty balance", function() {
    expect(account.viewCurrentBalance()).toEqual(0.00);
  });


});
