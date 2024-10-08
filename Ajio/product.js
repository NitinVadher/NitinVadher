fetch(`http://localhost:3000/product`)

    .then((r) => {
        return r.json()
    })
    .then((res) => {
        document.getElementById("box").innerHTML = productData(res)
    })

    .catch((err) => {
        console.log(err);

    })

function productData(s) {
    return s.map((n) => {
        return `<div id="card">
        <div id="images"> <img  src="${n.img}"/>
         </div>
         
        <div id="texbox">
        <p id="price">$${n.price}</P>
        <h1 id="tital">${n.tital}</h1>
        <p id="Productname">${n.productName}</p>
        <button id="addtocard">${n.addtocard}</button>
        </div>
</div>`

    }).join("")
}