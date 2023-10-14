const inputName = "Bella";
const inputPass = "qwe123";

let inputUserName = document.getElementById("userName");
console.log("userName")
let inputPassword = document.getElementById("passWord");
console.log("passWord");


function checkLogin(){
  inputUserName = document.getElementById("userName").value;
  inputPassword = document.getElementById("passWord").value;

  if(inputUserName === inputName && inputPassword === inputPass){
    localStorage.setItem("user", inputUserName);
    localStorage.setItem("code", inputPassword);
    welcomePage();
}
else{
    backPage();
}
}

document.getElementById("logInButton").addEventListener("click", function(){
    checkLogin();
});


function welcomePage(){

    document.body.innerHTML = "";
    document.body.insertAdjacentHTML("afterbegin", '<h1>Welcome Bella</h1></br></br>');

    var braInlog = document.createElement('div');
    braInlog.className='welcome';
    braInlog.id= 'bra-info';
    braInlog.setAttribute('title', ' Hello');
    var braInlogText= document.createTextNode('Welcome here Bella');
    braInlog.appendChild(braInlogText);
    document.body.appendChild(braInlog);

    const logOutButton = document.createElement('button');
    logOutButton.innerHTML = "Log Out";
    logOutButton.id = "loggaUt";
    document.body.appendChild(logOutButton);
    logOutButton.addEventListener("click", function(){
     localStorage.clear();
     gohome();
    });
}
function backPage() {
    document.body.innerHTML = "";
    document.body.insertAdjacentHTML("afterbegin", '<h1>Sorry you did something wrong</h1></br>');

    var felInlog = document.createElement('div');
    felInlog.className='Något-Fel';
    felInlog.id= 'fel-info';
    felInlog.setAttribute('title', ' Go back');
    var felInlogText= document.createTextNode('User Name or PassWord are Wrong');
    felInlog.appendChild(felInlogText);
    document.body.appendChild(felInlog);
    
    const goBackButton = document.createElement('button');
    goBackButton.innerHTML = "Go Back";
    goBackButton.id = "newBtn";
    document.body.appendChild(goBackButton);
    goBackButton.addEventListener("click", function(){
        gohome();
    });
}

function gohome()
{
window.location.href="index.html";
}

if (localStorage.getItem("user", "code")){
    welcomePage();
}
