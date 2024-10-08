// Write a function printSquare that takes an array of numbers as input and prints the square of each number using the forEach method.

function printSquare(h) {
    return h.forEach(element => {
        console.log(element*element) 
    })

}

var arr = [2, 5, 6, 8, 74, 6]

var ans = printSquare(arr)

