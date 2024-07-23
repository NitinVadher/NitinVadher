// Determine the total bill amount including 8% tax and a $20 service fee for a purchase of $250 with a $30 discount.

var purchase = 250, taxr = 8, fee = 20, discount = 30, total;

var tax = (purchase * taxr) / 100;

total = (purchase + tax + fee) - discount;

console.log(total);
