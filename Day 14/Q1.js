
// 1. Write a function that takes a string as input and returns true if the string is a palindrome (reads the same forwards and backwards) and false otherwise.

function str(h) {

    var ans = "";

    
    for (var a = h.length - 1; a >= 0; a--)
    {
        ans = ans + h[a];
    }

    if (ans == h)
    {
        console.log("string is palindrome")
    }
    else {
        console.log("string is not palindrome")
        
    }
    
}

str("naman");