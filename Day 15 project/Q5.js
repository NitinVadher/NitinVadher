// 5. Write a function that computes the factorial of a given positive integer using a loop.

function fact(a) {
    
    var fac = 1;

    for (var h = 1; h <= a; h++){

        fac = fac * h;
    }

    return fac
}

var h = fact(5);

console.log(h)