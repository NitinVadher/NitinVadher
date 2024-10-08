function hiren() {

    var temp = document.getElementById("h").value;


    if (temp > 30) {
        document.getElementById("ans").innerText = "Hot";

    }
    else if (temp >= 15 && temp <= 30) {
        document.getElementById("ans").innerText = "Moderate";

    }
    else if (temp < 15) {
        document.getElementById("ans").innerText = "Cold";

    }





}