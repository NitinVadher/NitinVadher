// 4. Implement a function that calculates the power of a number using a loop.

function power(a, b) {
    var ans = 1;

     for (var h = 1; h <= b; h++) {
         ans = ans * a;
    }
    
    return ans;

}

var javab = power(2, 3);

console.log(javab);
