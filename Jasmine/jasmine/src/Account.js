function Account() {
  this._balance = 0.00;
  this._transactionHistory = [];
}

Account.prototype.viewCurrentBalance = function(){
  return this._balance;
};
