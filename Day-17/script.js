
let avengers = [
    

    {

        Image: "https://images.wallpapersden.com/image/download/8k-avengers-endgame-thanos_a2plbWuUmZqaraWkpJRmbmdlrWZlbWU.jpg",
        speakers: "Tony Stark",
        dialogue: "It's Not About How Much We've Lost, It's About How Much We Have Left."
    },

    {
        Image: "https://upload.wikimedia.org/wikipedia/en/c/cd/Thanos_Infinity_4.png",
        speakers: "Hulk",
        dialogue: " I don't know who I am. I don't know what I'm becoming. But I know one thing for sure, you wouldn't like me when I'm angry."

    },


    {
        Image: "https://images.app.goo.gl/uXytqYzaX89YXmaR7",
        speakers: "Dr.Strange",
        dialogue: "Death is what gives life meaning. To know your days are numbered. ..."

    },

    {
        Image: "https://www.pexels.com/photo/timelapse-photography-off-water-fountain-719396/",
        speakers: "Spider Man ",
        dialogue: "Whatever life holds in store for me, I will never forget these words"

    }
]


function data() {

    let ans = Math.floor(Math.random() * avengers.length)

    document.getElementById("b").innerHTML = `<img src="${avengers[ans].Image} "> <br> <h1>${avengers[ans].speakers} <br> <p> ${avengers[ans].dialogue} </p> </h1>`


}
