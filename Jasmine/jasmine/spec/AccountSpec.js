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

  describe("when making a deposit", function(){

    beforeEach(function() {
      account.deposit("10/2/17", 100.00);
    });

    it("adds the transaction to the transaction history", function(){
      expect(account._transactionHistory.length).toEqual(1);
    });

    it("adds the value of the transaction to the account balance", function(){
      expect(account.viewCurrentBalance()).toEqual(100.00);
    });
  });
});
