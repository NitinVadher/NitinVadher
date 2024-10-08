function hiren(){

    let Year = document.getElementById("data").value;


        (Year < 1) ? 
        document.getElementById("h1").innerText =`Ancient Time` 
    
      : (Year >= 1 && Year <= 1500) ? 
        document.getElementById("h1").innerText = `Medieval Time` 
    
      : (Year >= 1501 && Year <= 2024) ?
        document.getElementById("h1").innerText = `Modern Time` 
    
      : (Year >= 2025) ? 
        document.getElementById("h1").innerText =`Future Time` 
      : ""
    
   
}