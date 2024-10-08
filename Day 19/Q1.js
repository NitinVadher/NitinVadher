// Write a function doubleNumbers that takes an array of numbers as input and returns a new array where each number is doubled using the map method.


function doubleNumbers(hiren) { 
    return hiren.map((Element)=> {
        
        return Element * 2
    })

}

var arr = [5, 1, 3, 4, 6]

var ans = doubleNumbers(arr)

console.log(ans)