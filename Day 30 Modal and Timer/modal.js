setTimeout(() => {
    document.getElementById("modal").style.display="block"
},2000)


document.getElementById("icon").addEventListener("click", () => {
      document.getElementById("modal").style.display = "none";

})

var form = document.querySelector("#signupForm");
var arr = [];
var vailid = true;

document.querySelector("#loginForm").addEventListener("submit", (b) => {
  b.preventDefault();

  var loginEmail = document.querySelector("#emaillogin").value;
  var loginPassword = document.querySelector("#passwordlogin").value;

  var kk = true;
  document.querySelector("#emailtextlogin").innerHTML = "";
  document.querySelector("#passtextlogin").innerHTML = "";

  if (loginEmail.length == 0) {
    document.querySelector("#emailtextlogin").innerHTML =
      "Please Enter valid email";
    kk = false;
  }
  if (loginPassword.length < 8) {
    document.querySelector("#passtextlogin").innerHTML =
      "Plase Enter Correct password";
    kk = false;
  }

  if (kk == true) {
    var ans = arr.filter((Element) => {
      if (
        Element.emailAdress == loginEmail &&
        Element.password == loginPassword
      ) {
        return Element;
      }
    });

    if (ans.length > 0) {
      alert("Login successfull");
    } else {
      alert("Login Fail");
    }
  }
});

document.querySelector("#swap1").addEventListener("click", () => {
  document.querySelector("#loginMain").style.display = "block";
  document.querySelector("#singupMain").style.display = "none";
});

document.querySelector("#swap2").addEventListener("click", () => {
  document.querySelector("#loginMain").style.display = "none";
  document.querySelector("#singupMain").style.display = "block";
});

form.addEventListener("submit", (a) => {
  a.preventDefault();

  var user = document.querySelector("#user").value;
  var email = document.querySelector("#email").value;
  var pass = document.querySelector("#password").value;

  vailid = true;
  document.querySelector("#usertext").innerHTML = "";
  document.querySelector("#emailtext").innerHTML = "";
  document.querySelector("#passtext").innerHTML = "";

  var emailregex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  var passregex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&^])[A-Za-z\d@.#$!%*?&]{8,15}$/;

  if (user.length == 0) {
    document.querySelector("#usertext").innerHTML = "Please Enter Username";
    vailid = false;
  }
  if (emailregex.test(email) == false || email.length == 0) {
    document.querySelector("#emailtext").innerHTML = "Please Enter Valid Email";
    vailid = false;
  }
  if (pass.length < 8 || passregex.test(pass) == false) {
    document.querySelector("#passtext").innerHTML =
      "Plase Enter Strong password";
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
});
