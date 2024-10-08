function hiren() {
    var a = document.getElementById("h").value;
    var b = document.getElementById("i").value;
    var c = document.getElementById("r").value;

    if (a == b && a == c && b == c) {
        alert("Equilateral")
    }
    else if (a == b || b == c || a == c) {
        alert("Isosceles")
    }
    else {
        alert("Scalene")
    }


}