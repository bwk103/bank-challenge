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
      account.deposit(100.00);
    });

    it("adds the transaction to the transaction history", function(){
      expect(account._transactionHistory.length).toEqual(1);
    });

    it("adds the value of the transaction to the account balance", function(){
      expect(account.viewCurrentBalance()).toEqual(100.00);
    });
  });

  describe("when making a withdrawal", function(){

    beforeEach(function() {
      account.deposit(100.00);
      account.withdraw(80.00);
    });

    it("adds the transaction to the transaction history", function(){
      expect(account._transactionHistory.length).toEqual(2);
    });

    it("deducts the value of the transaction from the account balance", function(){
      expect(account.viewCurrentBalance()).toEqual(20.00);
    });
  });

  describe ("edge cases", function(){

    it("should raise an error if deposit is called with 0", function(){
      expect(function() {account.deposit(0)}).toThrow("Please enter a positive number");
    });

    it("should raise an error if withdrawal is called with 0", function(){
      expect(function() {account.withdraw(0)}).toThrow("Please enter a positive number");
    });

    it("should raise an error if deposit is called with a negative number", function(){
      expect(function() {account.deposit(-1)}).toThrow("Please enter a positive number");
    });

    it("should raise an error if withdrawal is called with a negative number", function(){
      expect(function() {account.withdraw(-1)}).toThrow("Please enter a positive number");
    });
  });
});
