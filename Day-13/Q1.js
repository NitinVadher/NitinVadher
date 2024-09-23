// 1. Write a function that takes a positive integer as input and returns the sum of its digits.
//     Input: 12345
//     output: 15

function sumOfDigits(n) {
    let sum = 0;
    while (n > 0) {
        sum += n % 10;
        n = Math.floor(n / 10);
    }
    return sum;
}

console.log(sumOfDigits(5467));

