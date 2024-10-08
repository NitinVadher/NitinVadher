function hiren(){

    let electricity_bill = document.getElementById("data").value
    let peruinit1 ,peruinit2, peruinit3, peruinit4;

    peruinit1 = electricity_bill * 0.1;
    peruinit1 = electricity_bill * 0.15;
    peruinit1 = electricity_bill * 0.20;
    peruinit1 = electricity_bill * 0.25;

      ( electricity_bill <= 100) ?
    document.getElementById("ans").innerText = `Total electricity bill is : ${peruinit1}`

    : ( electricity_bill >= 101 && electricity_bill <= 200) ?
    document.getElementById("ans").innerText = `Total electricity bill is : ${peruinit2}`

    : ( electricity_bill >= 201 && electricity_bill <= 300) ?
    document.getElementById("ans").innerText = `Total electricity bill is : ${peruinit3}`
    
    : ( electricity_bill > 300 ) ?
    document.getElementById("ans").innerText = `Total electricity bill is : ${peruinit4}`   
    : ""
}