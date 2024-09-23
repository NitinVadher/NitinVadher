// 5. Write a function that computes the factorial of a given positive integer using a loop.
//     Input:  Factorial(5) 
//     output: 120 ( 5 * 4 * 3 * 2 * 1)



function factorial(n) {
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result *= i;
  }
  return result;
}

console.log(factorial(5));