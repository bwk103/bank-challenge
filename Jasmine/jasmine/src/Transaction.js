function Transaction(){
  this._debit = null;
  this._credit = null;
  this._date = null;
  this._revised_balance = null;
}

Transaction.prototype.deposit = function(date, value, balance){
  this._date = date;
  this._credit = value;
  this._revised_balance = (balance += value);
};

Transaction.prototype.withdraw = function(date, value, balance){
  this._date = date;
  this._debit = value;
  this._revised_balance = (balance -= value);
};
