// Write a function that takes an array of numbers and returns the sum of all elements. Use the forEach method

var arr = [10, 20, 30, 40]
var sum = 0;

arr.forEach((Element) => {
    sum = sum + Element
})

console.log(sum)