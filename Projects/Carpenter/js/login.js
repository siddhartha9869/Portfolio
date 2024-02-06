var input = document.querySelectorAll("input");
var login = document.querySelector("button");
var form = document.querySelector("form");
// var warn = document.querySelector("#warn");


var session = false;

var user_store = [];
localStorage.setItem("session",session);
user_store = JSON.parse(localStorage.getItem("user_store"));

form.addEventListener("submit", (e)=>{
    var flag = true;

    var matching=user_store.find((e)=>{
        if (input[0].value==e.mail && input[1].value==e.pass) {
            return e;
        }
    });

    if (matching) {
        alert("Logged In Successfully");
        session = true;
        localStorage.setItem("session",session);
    } else {
        e.preventDefault();
        alert("Email or Password is Incorrect");
        flag = false;
    }
    
    if (flag) {
        localStorage.setItem("Login",JSON.stringify(matching))

    }

    
});