function hiren(){

    let income = document.getElementById("data").value;
    let tax1, tax2, tax3, tax4;

    tax1 = ( income * 5) /100;
    tax2 = ( income * 10) /100;
    tax3 = ( income * 15) /100;
    tax4 = ( income * 20) /100;
    
    (income <= 10000)?
    document.getElementById("ans").innerText = `Income is : ${income - tax1}`

    :(income >= 10001 && income <=50000) ?
    document.getElementById("ans").innerText = `Income is : ${income - tax2}`
  
    :(income >= 50001 && income <=100001) ?
    document.getElementById("ans").innerText = `Income is : ${income - tax3}`

    :(income > 100000) ?
    document.getElementById("ans").innerText = `Income is : ${income - tax4}`
    
    :""
}