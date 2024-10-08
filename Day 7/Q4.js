function hiren() {

    var press = document.getElementById("choice").value;
    var temp = +document.getElementById("h").value;

    var ans;

    // document.getElementById("ans").innerText = `Celsius =${}`

    if (press == 'c') {


        ans = (temp - 32) * 5 / 9;
        document.getElementById("ans").innerText = `Celsius =${ans}`

    }
    else if (press == 'f') {

        ans = (temp * (9 / 5)) + 32;

        document.getElementById("ans").innerText = `Fahrenheit =${ans}`

    }

}