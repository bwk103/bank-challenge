function StatementPrinter() {}

StatementPrinter.prototype.print = function(transactions){
  var string = "date\t\t\t|| credit\t|| debit\t|| balance\t||\n";
  transactions.forEach(function(transaction){
    string += " " + formatDate(transaction._date) + " \t||";
    string += " " + isNull(transaction._credit) + "\t||";
    string += " " + isNull(transaction._debit)+ "\t||";
    string += " " + transaction._revised_balance.toFixed(2) + "\t||\n";
  });
  return string;
};

isNull = function(value) {
  if (value !== null) {
     return value.toFixed(2);
  } else{
     return "\t\t";
  }
};

formatDate = function(date){
  var day = "0" + date.getUTCDate().toString().slice(-2);
  var month = "0" + (date.getUTCMonth()+1).toString().slice(-2);
  var year = date.getUTCFullYear();
  return day + "-" + month + "-" + year;
};
