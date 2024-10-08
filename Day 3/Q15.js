//Calculate the total bill amount including a 10% tip for a meal costing $60.

var taxr = 10;
var costing = 60;

var tax = (taxr * costing) / 100;

var totalbill = tax + costing;

console.log(totalbill);
