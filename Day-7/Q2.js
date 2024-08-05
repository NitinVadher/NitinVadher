function hiren() {

    var t = document.getElementById("year").value;
    var p = document.getElementById("amount").value;
    var si, total;

    if (p <= 1000) {
        si = (p * 5 * t) / 100;
        total = si + +p;
        document.getElementById("ans").innerText = `total amount =${total}`
    }
    else if (p > 1000 && p <= 5000) {
        si = (p * 7 * t) / 100;
        total = si + +p;
        document.getElementById("ans").innerText = `total amount =${total}`
    }
    else if (p > 5000) {
        si = (p * 10 * t) / 100;
        total = si + +p;
        document.getElementById("ans").innerText = `total amount =${total}`
    }
}