function hiren() {

  let age = document.getElementById("data").value;




  (age < 1) ?
    document.getElementById("ans").innerText = `You Are In Infant Categorize`

    : (age >= 1 && age <= 12) ?
      document.getElementById("ans").innerText = `You Are In Child Categorize`


      : (age >= 13 && age <= 19) ?
        document.getElementById("ans").innerText = `You Are In Teenager Categorize`


        : (age >= 20 && age <= 64) ?
          document.getElementById("ans").innerText = `You Are In Adult Categorize`


          : (age >= 65) ?
            document.getElementById("ans").innerText = `You Are In Senior Citizen Categorize` 
            
            : ""



}