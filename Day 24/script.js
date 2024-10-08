var form = document.querySelector("#signupForm");
var arr = []
var vailid = true

document.querySelector("#loginForm").addEventListener("submit", (b) => {
  b.preventDefault()

  var loginEmail = document.querySelector("#emaillogin").value
  var loginPassword = document.querySelector("#passwordlogin").value

  var kk = true
  // document.querySelector("#emailtextlogin").innerHTML = ""
  // document.querySelector("#passtextlogin").innerHTML = ""

   if (loginEmail.length == 0) {
     document.querySelector("#emailtextlogin").innerHTML = "Please Enter valid email";
     kk = false;

   }
   if (loginPassword.length < 8) {
     document.querySelector("#passtextlogin").innerHTML =
       "Plase Enter password";
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

 
  

})

document.querySelector("#swap1").addEventListener("click", () => {
  document.querySelector("#loginMain").style.display = "block";
  document.querySelector("#singupMain").style.display = "none";
})

document.querySelector("#swap2").addEventListener("click", () => {
  document.querySelector("#loginMain").style.display = "none";
  document.querySelector("#singupMain").style.display = "block";
});

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
