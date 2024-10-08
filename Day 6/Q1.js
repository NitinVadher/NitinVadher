function hiren() {

    var incom = document.getElementById("h").value;
    var tax, final;

    if (incom <= 10000) {
        tax = (incom * 5) / 100;
        final = incom - tax;
        document.getElementById("tax1").innerText = `Tax =${tax}`
        document.getElementById("final1").innerText = `Final incom =${final}`
    }
    else if (incom >= 10001 && incom <= 50000) {
        tax = (incom * 10) / 100;
        final = incom - tax;
        document.getElementById("tax1").innerText = `Tax =${tax}`
        document.getElementById("final1").innerText = `Final incom =${final}`
    }
    else if (incom >= 50001 && incom <= 100000) {
        tax = (incom * 15) / 100;
        final = incom - tax;
        document.getElementById("tax1").innerText = `Tax =${tax}`
        document.getElementById("final1").innerText = `Final incom =${final}`
    }
    else if (incom > 100000) {
        tax = (incom * 20) / 100;
        final = incom - tax;
        document.getElementById("tax1").innerText = `Tax =${tax}`
        document.getElementById("final1").innerText = `Final incom =${final}`
    }

}