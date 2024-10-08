

fetch(`https://fakestoreapi.com/products`)

    .then((n) => {
        return n.json()
    })

    .then((res) => {
        console.log(res);
        document.getElementById("box").innerHTML =view(res)
    })

function view(nv) {
    return nv.map((el) => {
        return `<div id="a1">
        <div id="a2">
        <img id="img" src="${el.image}"/>
        </div>

        <div id="a3">
        <p> ${el.title}</p>
        <p> ${el.price}</p>
        </div>

        </div>`
    })
}