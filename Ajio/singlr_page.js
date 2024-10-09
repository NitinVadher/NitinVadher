
let data = new URLSearchParams(window.location.search)

let idd = data.get("id")


fetch(`http://localhost:3000/product?id=${idd}`)
    .then((r) => {
        return r.json()
    })
    .then((res) => {
      
        document.getElementById("box").innerHTML = view(res)
       
        document.getElementById("ac").addEventListener("click",()=>{

        add_to_cart(res)
           
        })
    
       
        
    })
    .catch((er) => {
        console.log(er);
    })

    function add_to_cart(res){
        fetch(`http://localhost:3000/single_product?id=${res[0].id}`)

        .then((r)=>{
            return r.json();
        })
        .then((Res)=>{
         
            console.log(Res);
            if(Res.length>0){
                // alert("nOOOOOOOOOOOOOOOOOOOOOOOOOO")
                Swal.fire({
                    icon: "error",
                    title: "This product is already in Cart Page...",
                    text: "Something went wrong!",
                 

                    html: `
                   Go to This Page
                    <a href="add_to_cart.html" autofocus   style="text-decoration: underline; color: blue;">Lets Check</a>,
                   
                  `,
                  });
            }
            else{
                fetch(`http://localhost:3000/single_product`,{
                    method:"POST",
                    headers: {
                        "content-type":"application/json"
                    },
                    body: JSON.stringify(res[0])

                })
                .then((r)=>{
                    return r.json();
                })
                .then((res)=>{
                    console.log(res);
                    
                })
                .catch((err)=>{
                    console.log(err);
                    
                })
                   

            }
            
            
        })
        .catch((er)=>{
            console.log(er);
            
        })
    }
    

function view(arr) {
    return arr.map((n) => {
        return `
          <div id="card">
        <div id="images">
         <a href="single_page.html?id=${n.id}">
        <img  src="${n.img}"/></a>
         </div>
         
        <div id="texbox">
        <p id="price">$${n.price}</P>
        <h1 id="tital">${n.tital}</h1>
        <p id="Productname">${n.productName}</p>
        <button id="addtocard">${n.addtocard}</button>
        </div>
<br>
        <button id="ac"  class="w-[70%] h-[50px] text-[20px] 
            text-[white] rounded-[10px] mb-[3%] bg-[#FF7043]">ADD TO CART</button>
</div>
        `
    }).join("")
}





