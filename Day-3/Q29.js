//  Determine the total bill amount including 12% tax, 18% tip, and a $25 service charge for a purchase of $500 with a $50 voucher

var purchase = 500, taxr = 12, tipr = 18, charge = 25, voucher = 50, total;

var tax = (purchase * taxr) / 100;

var tip = (purchase * tipr) / 100;

total = (purchase + tax + tip + charge) - voucher;

console.log(total);