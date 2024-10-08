// Write a function that takes a string as input and returns the string reversed using a loop.

function reversed(str) {

    var ans = "";

    for (var h = str.length - 1; h >= 0; h--){
        ans = ans + str[h];
    }
    console.log(ans);
}

reversed("hello");