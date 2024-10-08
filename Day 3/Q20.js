// Calculate the total bill amount including 18 % tax and a $5 service charge for a purchase of $80.

var taxr = 18;
var purchase = 80;
var charge = 5;

var tax = (taxr * purchase) / 100;

var totalbill = tax + purchase + charge;

console.log(totalbill);