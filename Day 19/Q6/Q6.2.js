// Write a function areAllStringsLong that takes an array of strings as input and returns true if all strings in the array have a length greater than 5 characters using the every method.


function areAllStringsLong (h){

    return h.every((Element)=>{

        if(Element.length>=5)
        {
            return Element
        }
        
    })
    
}


var str = ['chirag','harsh','chintan','tushal','hiren','nitin']

var ans=areAllStringsLong(str)

console.log(ans)