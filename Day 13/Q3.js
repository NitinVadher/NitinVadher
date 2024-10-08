 function str(h) {

    var ans = "";

    
    for (var a = h.length - 1; a >= 0; a--)
    {
        ans = ans + h[a];
    }

    console.log(ans);
    
}

str("hello");