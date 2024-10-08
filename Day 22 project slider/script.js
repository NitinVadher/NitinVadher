

var h = 0;
var arr = [
    "https://www.pixel4k.com/wp-content/uploads/2018/11/spectacular-iron-man-4k_1541968331.jpg",
    "https://wallpaperaccess.com/full/1307307.jpg",
    "https://i.pinimg.com/originals/60/08/33/6008331c18580e1eb3d6b7804d4c4c1a.jpg",
    "https://wallpapers.com/images/featured/hulk-6mm236yblh8z7yed.jpg",
    "https://wallpapers.com/images/featured/black-widow-4k-gzj82d7x07zqcdu6.jpg",
    "https://wallpapers.com/images/featured/hawkeye-a326pji23dkf26xm.jpg"
]



function prev() {

    document.getElementById("main").innerHTML = `<img src="${arr[h]}">`
    h++;
    if (h==arr.length)
    {
        h=0

    }

    
}
function nex() {
    h--;
    if(h<0)
    {
        h=arr.length-1
    }
    document.getElementById("main").innerHTML = `<img src="${arr[h]}"> `

    
}


