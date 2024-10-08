// Write a function containsValue that takes an array of numbers and a target number as input and returns true if the target number is present in the array using the includes method.

function containsValue(num){

    return num.includes(5)
}

var num = [5, 1, 3, 4, 6]

var ans = containsValue(num)

console.log(ans)