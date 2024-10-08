var form = document.querySelector("form");
var arr = []
var vailid = true


form.addEventListener("submit", (a) => {
  a.preventDefault();
  var user = document.querySelector("#user").value;
  var email = document.querySelector("#email").value;
  var pass = document.querySelector("#password").value;

  vailid = true
  document.querySelector("#usertext").innerHTML = ""
  document.querySelector("#emailtext").innerHTML = ""
  document.querySelector("#passtext").innerHTML = ""

  if (user.length == 0) {
    document.querySelector("#usertext").innerHTML = "Please Enter Username";
    vailid = false;
  }
  if (email.length == 0) {
    document.querySelector("#emailtext").innerHTML = "Please Enter Email";
    vailid = false;
  }
  if (pass.length < 8 ) {
    document.querySelector("#passtext").innerHTML = "Plase Enter Strong password";
    vailid = false;
  }

  var obj = {
    username: user,
    emailAdress: email,
    password: pass,
  };

  if (vailid == true) {
    arr.push(obj);
  }
  
  console.log(arr);
})
