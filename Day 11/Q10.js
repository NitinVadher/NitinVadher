function printMultiplicationTable() {
    var a = 7;
    var ans;


    for (var h = 1; h <= 10; h++){
        ans = a * h;
        console.log(`${a} x ${h} = ${ans}`)
    }
}

printMultiplicationTable()