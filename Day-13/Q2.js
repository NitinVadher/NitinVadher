// 2. Write a function that takes a string as input and returns the string reversed using a loop.

function reverseString(str) {

    let revers = '';

    for (let X = str.length - 1; X >= 0; X--) {

        revers += str[X];
    }
    return revers;
}
console.log(reverseString("hello"));
