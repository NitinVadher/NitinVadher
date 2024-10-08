function hiren() {

    var age = document.getElementById("h").value;


    if (age < 1) {
        document.getElementById("ans").innerText = "Infant";
    }
    else if (age >= 1 && age <= 12) {
        document.getElementById("ans").innerText = "Child"
    }
    else if (age >= 13 && age <= 19) {
        document.getElementById("ans").innerText = "Teenager"
    }
    else if (age >= 20 && age <= 64) {
        document.getElementById("ans").innerText = "Adult"
    }
    else if (age >= 65) {
        document.getElementById("ans").innerText = "Senior Citizen"
    }

}