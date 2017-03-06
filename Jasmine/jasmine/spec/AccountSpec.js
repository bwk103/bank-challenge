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

  describe("when viewing the account statement", function(){
    beforeEach(function() {
      account.deposit(1000.00);
      account.deposit(2000.00);
      account.withdraw(500.00);
    });

    it("returns a string containing the headers", function(){
      expect(account.statement()).toContain("date\t\t\t|| credit\t|| debit\t|| balance\t||\n");
    });

    it("returns a string with all details of the transactions", function(){
      expect(account.statement()).toContain(" 06-03-2017 \t|| 1000.00\t|| \t\t\t|| 1000.00\t||\n");
      expect(account.statement()).toContain(" 06-03-2017 \t|| 2000.00\t|| \t\t\t|| 3000.00\t||\n");
      expect(account.statement()).toContain(" 06-03-2017 \t|| \t\t\t|| 500.00\t|| 2500.00\t||\n");
    });
  });
});
