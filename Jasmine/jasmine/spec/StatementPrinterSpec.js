describe("StatementPrinter", function() {

  beforeEach(function() {
    statementPrinter = new StatementPrinter();
  });

  describe("when passed a transaction history", function() {

    beforeEach(function() {
      account = new Account();
      account.deposit(100);
      account.withdraw(50.00);
      transactions = account.viewTransactionHistory();
    });

    it("returns a string containing a header", function(){
      expect(statementPrinter.print(transactions)).toContain("date\t\t\t|| credit\t|| debit\t|| balance\t||\n");
    });

    it("returns a string with all details of the transactions", function(){
      expect(statementPrinter.print(transactions)).toContain("06-03-2017 	|| 			|| 50.00	|| 50.00	||");
      expect(statementPrinter.print(transactions)).toContain("06-03-2017 	|| 100.00	|| 			|| 100.00	||");      // expect(statementPrinter.print()).toContain(" 06-03-2017 \t|| \t\t\t|| 500.00\t|| 2500.00\t||\n");
    });
  });
});
