function st() {
    var value = document.querySelector("#getvalue").value

    // var value = 7;

    var clear = setInterval(() => {
        value--;
        document.querySelector("#output").innerHTML = value
    //   console.log(value);
      if (value <= 0) {
        clearInterval(clear);
      }
    }, 1000);
}






