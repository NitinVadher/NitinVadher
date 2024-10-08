function hiren(){


    function calculateSquare(a){

        var ans;

        ans = a*a;

        return ans;
    }

    var h = document.getElementById("data").value;

    var sq = calculateSquare(h);

    console.log(document.getElementById("ans").innerHTML = `Square of ${h} = ${sq}`)

}