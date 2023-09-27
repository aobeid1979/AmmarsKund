localStorage.setItem(userName, "Bella");
localStorage.setItem(password, "qwe123");





function login(form) {
    if (form.userName.value=="Bella") { 
    if (form.passWord.value=="qwe123") {              
    location="Welcome.html" 
    } else {
    location="tryAgin.html"
    }
    } else {  
    location="tryAgin.html"
    }
    }

function GoBack(form) {
    location="index.html"
}