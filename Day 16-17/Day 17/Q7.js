// Given an array [1, 2, 3, 4], use the map function and the calculateCube function to calculate the cube of each number in the array.

var arr = [1, 2, 3, 4];

var ans = arr.map((element) => {
    return element * element * element;
})

console.log(ans)