function hiren(){

    let purchase_amount = document.getElementById("data").value;
    let discount1, discount2, discount3  ;


    discount1 = ( purchase_amount * 5)/100;
    discount2 = ( purchase_amount * 10)/100;
    discount3 = ( purchase_amount * 15)/100;

    (purchase_amount < 100) ?
    document.getElementById("ans").innerText = `No discount is applied`

    : (purchase_amount >= 100 && purchase_amount <= 500) ?
    document.getElementById("ans").innerText = `Amount is : ${purchase_amount - discount1}`

    : (purchase_amount >= 500 && purchase_amount <= 1000) ?
    document.getElementById("ans").innerText = `Amount is : ${purchase_amount - discount2}`

    : (purchase_amount > 1000) ?
    document.getElementById("ans").innerText = `Amount is : ${purchase_amount - discount3}`

    : ""


    
}