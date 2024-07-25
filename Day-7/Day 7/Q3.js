function hiren() {

    var billamount = +document.getElementById("amount").value;
    var charge = 50, totalbill, rate;

    if (billamount <= 500) {

        rate = (billamount * 10) / 100;
        totalbill = billamount + charge + rate;
        document.getElementById("ans").innerText = `total Bill =${totalbill}`
    }
    else if (billamount > 500 && billamount <=1000) {

        rate = (billamount * 15) / 100;
        totalbill = billamount + charge + rate;
        document.getElementById("ans").innerText = `total Bill =${totalbill}`
    }
    else if ( billamount >1000) {

        rate = (billamount * 20) / 100;
        totalbill = billamount + charge + rate;
        document.getElementById("ans").innerText = `total Bill =${totalbill}`
    }
}