// Write a function areAllPositive that takes an array of numbers as input and returns true if all numbers in the array are positive using the every method.

function areAllPositive (h){

    return h.every((Element)=>{

        if(Element>0)
        {
            return Element
        }
    })

}

var num = [5,3,5,6,7,9]

var ans=areAllPositive(num)

console.log(ans)