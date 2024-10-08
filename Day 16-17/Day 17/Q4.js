// Given an array [2, 4, 6, 8], use the map function and the calculateArea function to calculate the area of each square  with lengths as given in the array.

var arr = [2, 4, 6, 8];

var ans = arr.map((element) => {
    return element * element;
})

console.log(ans)