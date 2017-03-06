function Account() {
  this._balance = 0.00;
  this._transactionHistory = [];
}

Account.prototype.viewCurrentBalance = function(){
  return this._balance;
};

Account.prototype.deposit = function(value){
  var transaction = new Transaction();
  transaction.deposit(new Date(), value, this.viewCurrentBalance());
  this._transactionHistory.unshift(transaction);
  this._balance += value;
};

Account.prototype.withdraw = function(value){
  var transaction = new Transaction();
  transaction.withdraw(new Date(), value, this.viewCurrentBalance());
  this._transactionHistory.unshift(transaction);
  this._balance -= value;
};

Account.prototype.statement = function(){
  var string = "date\t\t\t|| credit\t|| debit\t|| balance\t||\n";
  this._transactionHistory.forEach(function(transaction){
    string += " " + formatDate(transaction._date) + " \t||";
    string += " " + isNull(transaction._credit) + "\t||";
    string += " " + isNull(transaction._debit)+ "\t||";
    string += " " + transaction._revised_balance.toFixed(2) + "\t||\n";
  });
  return string;
};

function isNull(value) {
  if (value !== null) {
     return value.toFixed(2);
  } else{
     return "\t\t";
  }
}

function formatDate (date){
  var day = "0" + date.getUTCDate().toString().slice(-2);
  var month = "0" + (date.getUTCMonth()+1).toString().slice(-2);
  var year = date.getUTCFullYear();
  return day + "-" + month + "-" + year;
}
