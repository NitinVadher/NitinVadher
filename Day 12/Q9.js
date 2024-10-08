function findFactorial(a) {
    
    var fact = 1;

    for (var h = 1; h <= a; h++)
    {
        fact = fact * h;
    }

    return fact ;
}

var h = findFactorial(7);

console.log(h)