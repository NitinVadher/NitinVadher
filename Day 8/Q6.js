function hiren(){

    let temperature = document.getElementById("data").value;


        (temperature > 30) ? 
        document.getElementById("h1").innerText = `Temperature is Hot` 

    
       : (temperature >= 15 && temperature <= 30) ?
        document.getElementById("h1").innerText = `Temperature is Moderate` 

    
       : (temperature < 15) ?
        document.getElementById("h1").innerText = `Temperature is Cold` : ""

}