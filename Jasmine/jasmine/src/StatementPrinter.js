function StatementPrinter() {}

StatementPrinter.prototype.print = function(transactions){
  var string = "date\t\t\t|| credit\t|| debit\t|| balance\t||\n";
  transactions.forEach(function(transaction){
    string += " " +formatDate(transaction._date) + " \t||";
    string += formatNumber(transaction._credit) + "\t||";
    string += formatNumber(transaction._debit)+ "\t||";
    string += formatNumber(transaction._revised_balance) + "\t||\n";
  });
  return string;
};

isNull = function(value) {
  if (value !== null) {
     return value.toFixed(2);
  } else{
    var blankSpace = "\t\t";
     return blankSpace;
  }
};

formatNumber = function(value){
  if (value === null) {
    var blankColumn = "\t\t";
    return blankColumn;
  } else if(value < 10) {
      return "    " + value.toFixed(2).toString();
  } else if (value < 100) {
      return "   " + value.toFixed(2).toString();
  } else if (value < 1000) {
      return "  " + value.toFixed(2).toString();
  } else {
      return " " + value.toFixed(2).toString();
  }
};

formatDate = function(date){
  var day = "0" + date.getUTCDate().toString().slice(-2);
  var month = "0" + (date.getUTCMonth()+1).toString().slice(-2);
  var year = date.getUTCFullYear();
  return day + "-" + month + "-" + year;
};
