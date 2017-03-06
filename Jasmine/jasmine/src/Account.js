function Account() {
  this._balance = 0.00;
  this._transactionHistory = [];
}

Account.prototype.viewCurrentBalance = function(){
  return this._balance;
};

Account.prototype.deposit = function(value){
  if (value < 1) {
    throw "Please enter a positive number";
  } else {
    var transaction = new Transaction();
    transaction.deposit(new Date(), value, this.viewCurrentBalance());
    this._transactionHistory.unshift(transaction);
    this._balance += value;
  }
};

Account.prototype.withdraw = function(value){
  if (value < 1) {
    throw "Please enter a positive number";
  } else {
    var transaction = new Transaction();
    transaction.withdraw(new Date(), value, this.viewCurrentBalance());
    this._transactionHistory.unshift(transaction);
    this._balance -= value;
  }
};

Account.prototype.viewTransactionHistory = function(value){
  return this._transactionHistory;
};

Account.prototype.statement = function(){
  var statementPrinter = new StatementPrinter();
  return statementPrinter.print(this._transactionHistory);
};
