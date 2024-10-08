let product = JSON.parse(localStorage.getItem("data")) || []
// let aa= JSON.parse(localStorage.getItem("data"))
let a = document.getElementById("pr_form").addEventListener("submit", (el) => {
    el.preventDefault();

    let img = document.getElementById("img").value
    let title = document.getElementById("title").value
    let price = document.getElementById("price").value
    let obj = {
        img: img,
        title: title,
        price: price
    }
    product.push(obj);
    localStorage.setItem("data", JSON.stringify(product))
    document.getElementById("img").value = ""
    document.getElementById("title").value = ""
    document.getElementById("price").value = ""


    // let ans=JSON.parse(localStorage.getItem("data"))
    console.log(product);
    document.getElementById("card").innerHTML = show();
})

function show() {
    return product.map((el) => {
        return ` 
        <div style="width: 24%; height: 400px; margin-bottom: 10px;  border: 1px solid black;">
            <div style="width: 100%; height: 60%;"> <img style="width: 100%; height: 100%;" src="${el.img}" alt=""></div>
            <div style="width: 100%; height: 40%; padding-left: 2%;">
                <h2  style="text-decoration: underline; margin-top: 7px;">${el.title}</h2>
                <p style="font-size: 18px; font-weight: bold; margin-top: -7px;">$ ${el.price} /-</p>
                <p style="color: green;">Free Delhivery</p>
                <p style="background-color: rgb(206, 200, 200); padding: 3px; border-radius: 3px; display: inline-block; margin-top: -20px;">Top Discount Of The Sale</p>
            </div>
        </div>
       
       `

    }).join("")

}



