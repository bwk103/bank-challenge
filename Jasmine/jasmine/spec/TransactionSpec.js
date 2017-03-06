describe("Transaction", function() {

  beforeEach(function() {
    transaction = new Transaction();
  });

  describe("when initialized", function(){

    it("has a null deposit value", function() {
      expect(transaction._deposit).toEqual(null);
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
      transaction.deposit("11/11/17", 100.00);
    });

    it("sets the transaction date", function(){
      expect(transaction._date).toEqual("11/11/17");
    });

    it("sets the deposit value", function(){
      expect(transaction._deposit).toEqual(100.00);
    });
  });

  describe("when making a withdrawal", function(){

    beforeEach (function() {
      transaction.deposit("12/11/17", 80.00);
    });

    it("sets the transaction date", function(){
      expect(transaction._date).toEqual("12/11/17");
    });

    it("sets the deposit value", function(){
      expect(transaction._deposit).toEqual(80.00);
    });
  });
});
