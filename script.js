const welcome1 = document.querySelector('#title');
console.log(welcome1);
const loginButton = document.getElementById('loginbut');
console.log(loginButton);
const userName = document.querySelector('#input-text');
console.log(userName);
const passWord = document.querySelector('#input-passWord');
console.log(passWord);








loginButton.addEventListener('click', onClick);
    function onClick(e){
    e.preventDefault();

    if (userName === 1 && passWord === 1) {
        alert("You have successfully logged in.");
};
    }

    