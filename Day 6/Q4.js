function hiren() {

    var year = document.getElementById("h").value;


    if (year < 1) {
        document.getElementById("ans").innerText = "Ancient";
    }
    else if (year >= 1 && year <= 1500) {
        document.getElementById("ans").innerText = "Medieval"
    }
    else if (year >= 1501 && year <= 2024) {
        document.getElementById("ans").innerText = "Modern"
    }
    else if (year >= 2025) {
        document.getElementById("ans").innerText = "Future"
    }
   
}