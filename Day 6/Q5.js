function hiren() {

    var purchase = document.getElementById("h").value;
    var discount,total;

    if (purchase < 100) {
        document.getElementById("dis").innerText = "No discount applied";
        document.getElementById("ans").innerText = `total purchase amount =${purchase}`;
    }
    else if (purchase >= 100 && purchase<500) {
        discount=(purchase*5)/100;
        document.getElementById("dis").innerText = `discount is =${discount}`;
        total=purchase-discount;
        document.getElementById("ans").innerText = `total purchase amount =${total}`;
    }
    else if (purchase >= 500 && purchase<1000) {
        discount=(purchase*10)/100;
        document.getElementById("dis").innerText = `discount is =${discount}`;
        total=purchase-discount;
        document.getElementById("ans").innerText = `total purchase amount =${total}`;
    }
    else if (purchase >= 1000 ) {
        discount=(purchase*15)/100;
        document.getElementById("dis").innerText = `discount is =${discount}`;
        total=purchase-discount;
        document.getElementById("ans").innerText = `total purchase amount =${total}`;
    }

   
   
}