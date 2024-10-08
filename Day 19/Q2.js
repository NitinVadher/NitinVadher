//Write a function getEvenNumbers that takes an array of numbers as input and returns a new array containing only the even numbers using the filter method.

function getEvenNumbers(h) {
    
    return h.filter((Element) => {
        if (Element % 2 == 0)
        {
            return Element
        }
    })
    
}

var arr = [1, 3, 4, 5, 6, 7, 8]

var ans = getEvenNumbers(arr)

console.log(ans)