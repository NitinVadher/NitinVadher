function hiren() {
    var a = document.getElementById("h").value;

    if (a >= 0 && a <= 90) {
        alert("First quadrant")
    }
    else if (a >= 91 && a <= 180) {
        alert("Second quadrant")

    }
    else if (a >= 181 && a <= 270) {
        alert("Third quadrant")

    }
    else if (a >= 271 && a <= 360){
        alert("Fourth quadrant")

    }
    else{
        alert("Invalid Degree")

    }
    




}