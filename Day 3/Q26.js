// Determine the total bill amount including 10% tax and a $15 delivery fee for a purchase of $300 with a $50 discount.

var purchase = 300, taxr = 10, fee = 15, discount = 50, total;

var tax = (purchase * taxr) / 100;

total = (purchase + tax + fee) - discount;

console.log(total);

