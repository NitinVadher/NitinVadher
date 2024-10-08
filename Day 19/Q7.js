// Write a function hasAnyEvenNumber that takes an array of numbers as input and returns true if at least one number in the array is even using the some method.

function hasAnyEvenNumber (h){

    return arr.some((Element) => {
        if(Element % 2 == 1)
        {
            return Element
        }
    })

}


var arr = [10,5,3,7,6,90,8,9]

var ans=hasAnyEvenNumber(arr)

console.log(ans)