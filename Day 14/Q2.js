
// 2. Write a function that takes a string of words and reverses the order of the words. For example, "Hello World" becomes "World Hello".

function str(h) {

    var ans = "";

    
    for (var a = h.length - 1; a >= 0; a--)
    {
        ans = ans + h[a];
    }

    console.log(ans);
    
}

str("hello world");