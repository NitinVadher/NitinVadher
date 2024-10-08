// Calculate the total bill amount including 25% tax, 15% tip, and a $20 service charge for a purchase of $200.

var purchase = 200, taxr = 25, tipr = 15, charge = 20, total;

var tax = (purchase * taxr) / 100;

var tip = (purchase * tipr) / 100;

total = purchase + tip + tax + charge;

console.log(total);