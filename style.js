function checkpasswords()
{
   if(document.getElementById('password1').value!="" && document.getElementById('password1').value == document.getElementById('password2').value ) 
   {
    alert("your passwords are correct");
   }
   else if(document.getElementById('password1').value != document.getElementById('password2').value && password1!=""){
    alert("PASSWORDS NOT SAME PLEASE CHECK");
   }
}

document.getElementById("togglepassword1").addEventListener("click", function () {
    const password = document.getElementById("password1");
    const type = password.type === "password" ? "text" : "password";
    password.type = type;
    this.classList.toggle("fa-eye-slash");
});

document.getElementById("togglepassword2").addEventListener("click", function () {
    const password = document.getElementById("password2");
    const type = password.type === "password" ? "text" : "password";
    password.type = type;
    this.classList.toggle("fa-eye-slash");
});

document.getElementById("togglepassword2").addEventListener("click", function () {
    const password = document.getElementById("passwordlogin");
    const type = password.type === "password" ? "text" : "password";
    password.type = type;
    this.classList.toggle("fa-eye-slash");
});

function toggle(){
   var x = document.getElementById("password2");
   if(x.type === "password")
   {
      x.type = "text";
   }
   else{
      x.type = "password";
   }
}

document.getElementById("password1").addEventListener('copy', function(e) {
    e.preventDefault();
  });

function savepass()
{
   var x = document.getElementById("password1");
   var y = document.getElementById("name");
   localStorage.setItem("username",y);
   localStorage.setItem("password",x);
}

function checkpass() {
   if (
      document.getElementById('password1').value != document.getElementById('password2').value &&
      document.getElementById('password1').value != ""
   ) {
      alert("Passwords do not match!");
      return false;
   } else {
      alert("Passwords are valid!");
      return true;
   }
}