function Account() {
  this._balance = 0.00;
}

Account.prototype.viewCurrentBalance = function(){
  return this._balance;
};
