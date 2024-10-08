// Write a function that checks if at least one element in an array is greater than 100. Use the some method.

var arr = [10, 20, 30, 150, 60]


var ans = arr.some((Element) => {
    if(Element > 100)
    {
        return Element
    }
})

console.log(ans)