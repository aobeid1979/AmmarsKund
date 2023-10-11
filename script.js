// funktion för att spara användarnamn i localstorage
function setLocalStorage() {
    localStorage.setItem("username", inputUserName.value);
    localStorage.setItem("password", inputPassword.value);
}

var namn = 'Bella';
var pass = 'qwe123';

if (
    localStorage.getItem("username") === namn &&
    localStorage.getItem("password") === lösenord
  ) {
    login();
  }

const logInBtn = document.getElementById("logInBtn");




  logInBtn.addEventListener("click", function () {
    if (inputUserName.value === namn && inputPassword.value === lösenord) {
      console.log('hi');
    }
      
  });


/*function loginPage(form) {
    if (form.userName.value === user) { 
    if (form.passWord.value === pass) {              
    location="home.html" 
    } else {
    alert("Incorrect detail Password")
    }
    } else {  alert("Incorrect detail Username")
    }
    }
    */