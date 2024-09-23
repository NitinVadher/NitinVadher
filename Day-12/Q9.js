function findFactorial() {
    
    var a = 7;
    var fact = 1;

    for (var h = 1; h <= a; h++)
    {
        fact = fact * h;
    }

    console.log(fact);
}

findFactorial()