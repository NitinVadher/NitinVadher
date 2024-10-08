let a;
function start() {
    let hour = document.getElementById("num2");
    let min = document.getElementById("num1");

    let sec = document.getElementById("num");

    a = setInterval(() => {
        let date = new Date();

        hour.innerHTML = date.getHours()
        min.innerHTML = date.getMinutes()
        sec.innerHTML = date.getSeconds()

       if(hour==15){

        hour=3

       }


    }, 1000)
}
function stop() {
    clearInterval(a)
}




// const currentDate = new Date();
// const currentTime = currentDate.toLocaleTimeString([], 
//     { hour: 'numeric', minute: 'numeric', hour12: true });

