// Define a function called reverseString that takes a string as input and returns its reversed

function reverseString(a) {
    
    var ans = "";

    for (var h = a.length - 1; h >= 0; h--)
    {
        ans = ans + a[h];
    }

    return ans;
}

var javab = reverseString("hello");

console.log(javab);