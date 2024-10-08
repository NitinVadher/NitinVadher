//  Given an array of numbers, write a function that first filters out all even numbers and then maps the remaining numbers to their squares. Return the resulting array.

var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]

var ans = arr.filter((element, index) => {
    if (element % 2 == 1)
    {
        return element
    }
    
})

var ans2 = ans.map((element) => {
    return element * element
})


console.log(ans2)