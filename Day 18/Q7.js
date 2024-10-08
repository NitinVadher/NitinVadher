// Given an array of ages, filter out the ages that are not eligible to vote (less than 18 years old). Use the filter method.

var ages = [12, 17, 19, 21, 15, 28]

var ans = ages.filter((Element,index)=>{

    if(Element>=18)
    {
        return Element
    }
})

console.log(ans)