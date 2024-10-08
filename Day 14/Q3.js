
// 3. Write a function that takes a string as input and returns count of  vowels present in string.
function str(h) {

    var count = 0;

    
    for (var a = h.length - 1; a >= 0; a--)
    {
        if (h[a] == "a" || h[a] == "e"|| h[a] == "i"|| h[a] == "o"|| h[a] == "u")
    {
       count++
        }
        
    }
   return count;
}

var javab = str("aeiou");

console.log(javab);