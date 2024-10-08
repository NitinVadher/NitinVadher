function st() {
    let a = document.getElementById("data").value

    if (a >= 90 && a <= 100) {
        document.getElementById("ans").innerHTML = `GPA is: 4.0`;
    }
    else if (a >= 80 && a < 90) {
        document.getElementById("ans").innerHTML = `GPA is: 3.0`;
    }
    else if (a >= 70 && a < 80) {
        document.getElementById("ans").innerHTML = `GPA is: 2.0`;
    }
    else if (a >= 60 && a < 70) {
        document.getElementById("ans").innerHTML = `GPA is: 2.0`;
    }
    else if (a >= 70 && a < 60) {
        document.getElementById("ans").innerHTML = `GPA is: 1.0`;
    }
    else if (a < 60) {
        document.getElementById("ans").innerHTML = `GPA is: 0.0`;
    }

}