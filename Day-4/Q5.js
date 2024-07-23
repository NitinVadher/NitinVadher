function nitin() {
    var a = document.getElementById("n").value;
    var b = document.getElementById("i").value;
    var c = document.getElementById("t").value;

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