describe("Transaction", function() {

  beforeEach(function() {
    transaction = new Transaction();
    transaction2 = new Transaction();
  });

  describe("when initialized", function(){

    it("has a null deposit value", function() {
      expect(transaction._debit).toEqual(null);
    });

    it("has a null credit value", function() {
      expect(transaction._credit).toEqual(null);
    });

    it("has a null date value", function() {
      expect(transaction._date).toEqual(null);
    });

    it("has a null revised_balance value", function() {
      expect(transaction._revised_balance).toEqual(null);
    });
  });

  describe("when making a deposit", function(){

    beforeEach (function() {
      transaction.deposit(new Date(), 100.00, 0);
    });

    it("sets the transaction's date", function(){
      expect(typeof transaction._date).toEqual("object");
    });

    it("sets the value to credit the account", function(){
      expect(transaction._credit).toEqual(100.00);
    });

    it("sets the revised_balance", function(){
      expect(transaction._revised_balance).toEqual(100.00);
    });
  });

  describe("when making a withdrawal", function(){

    beforeEach (function() {
      transaction.withdraw(new Date(), 80.00, 100.00);
    });

    it("converts the string provided into a Date object", function(){
      expect(typeof transaction._date).toEqual("object");
    });

    it("sets the value to debit the account", function(){
      expect(transaction._debit).toEqual(80.00);
    });

    it("sets the revised_balance", function(){
      expect(transaction._revised_balance).toEqual(20.00);
    });
  });

  describe("when making multiple transactions", function(){
    beforeEach (function() {
      transaction.deposit(new Date(), 150.00, 0);
      transaction2.withdraw(new Date(), 65.00, 150.00);
    });

    it("sets the revised_balance of the transaction", function(){
      expect(transaction._revised_balance).toEqual(150.00);
      expect(transaction2._revised_balance).toEqual(85.00);
    });
  });
});
