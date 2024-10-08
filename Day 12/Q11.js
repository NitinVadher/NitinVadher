function double (a){

    var ans = a * 2;

    return ans ;

}

function square(sq){

    var ans = sq * sq ;

    return ans;

}

function doubleSquare (a){

    var dd = double(a);

    var h = square(dd)

    console.log(h)
}

doubleSquare(3)