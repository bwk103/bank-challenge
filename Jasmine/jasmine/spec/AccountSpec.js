describe("Account", function() {

  beforeEach(function() {
    account = new Account();
  });

  describe("when initialized", function() {

    it("has a balance of 0.00", function() {
      expect(account.viewCurrentBalance()).toEqual(0.00);
    });

    it("has an empty transaction history", function(){
      expect(account._transactionHistory.length).toEqual(0);
    });
  });
});
