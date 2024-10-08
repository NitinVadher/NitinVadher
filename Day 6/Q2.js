function hiren() {

    var unit=document.getElementById("h").value;
    var monthly_bill;

    if (unit <=100) {
        monthly_bill=unit*0.1;
        document.getElementById("ans").innerText=`Electricity Bill = ${monthly_bill}`
    }
    else if(unit >=101 && unit <=200)
    {
        monthly_bill=unit*0.15;
        document.getElementById("ans").innerText=`Electricity Bill = ${monthly_bill}`
    }
    else if(unit >=201 && unit <=300)
    {
        monthly_bill=unit*0.2;
        document.getElementById("ans").innerText=`Electricity Bill = ${monthly_bill}`
    }
    else if(unit >=300)
    {
        monthly_bill=unit*0.25;
        document.getElementById("ans").innerText=`Electricity Bill = ${monthly_bill}`
    }

}