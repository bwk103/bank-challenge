function Account() {
  this._balance = 0.00;
  this._transactionHistory = [];
}

Account.prototype.viewCurrentBalance = function(){
  return this._balance;
};

Account.prototype.deposit = function(date, value){
  var transaction = new Transaction();
  transaction.deposit(date, value, this.viewCurrentBalance());
  this._transactionHistory.push(transaction);
  this._balance += value;
};

Account.prototype.withdraw = function(date, value){
  var transaction = new Transaction();
  transaction.withdraw(date, value, this.viewCurrentBalance());
  this._transactionHistory.push(transaction);
  this._balance -= value;
};
