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
});
