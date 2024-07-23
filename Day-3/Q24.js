// Determine the total bill amount including 15% tax and a $10 delivery fee for a purchase of $150

var taxr = 15, fee = 10, purchase = 150, total;

var tax = (purchase * taxr) / 100;

total = fee + purchase + tax;

console.log(total);