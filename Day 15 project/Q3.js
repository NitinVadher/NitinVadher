// 3. Write a function that counts the number of consonants in a given string.

function reversed(str) {

    var ans = "";
    var count = 0;

    for (var h = str.length - 1; h >= 0; h--){
        count++
    }
    return count;
}

var ans = reversed("hello");

console.log(ans);