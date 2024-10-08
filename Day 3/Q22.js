//  Determine the total bill amount including a 20% tip and 10% tax for a meal costing $100.

var tipp = 20;
var taxp = 10;
var costing = 100;

var tax = (costing * 20) / 100;

var costing = costing + tax;

var tip = (costing * 10) / 100;

var total = costing + tip;

console.log(total);

