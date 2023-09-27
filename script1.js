localStorage.setItem(userName, "Smith");
localStorage.setItem(password, "123");





function login(form) {
    if (form.userName.value=="Smith") { 
    if (form.passWord.value=="123") {              
    location="Welcome.html" 
    } else {
    location="tryAgin.html"
    }
    } else {  
    location="tryAgin.html"
    }
    }