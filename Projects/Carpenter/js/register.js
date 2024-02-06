var input = document.querySelectorAll("input");
var register = document.querySelector("button");
var form = document.querySelector("form");

var users = [];
var user_store = JSON.parse(localStorage.getItem("user_store"));
if (user_store) {
    users = user_store;
}
form.addEventListener("submit", (e)=>{
    var flag = true;

    
    if (input[0].value.length < 5) {
        input[0].setCustomValidity('Username must be at least 5 characters long.');
        e.preventDefault();
        flag = false;
    } else if (!/^[a-zA-Z ]+$/.test(input[0].value)) {
        input[0].setCustomValidity('Username can only contain letters.');
        e.preventDefault();
        flag = false;
    } else {
        input[0].setCustomValidity(''); // Reset custom validity if valid
    }

    if (!/^[6-9][0-9]{9}$/.test(input[2].value)) {
        input[2].setCustomValidity('Check your mobile number again.');
        e.preventDefault();
        flag = false;
    } else {
        input[2].setCustomValidity(''); // Reset custom validity if valid
    }

    
    if (!/^[a-zA-Z0-9~!#$@%^&*()_+-|/ ":]{8,15}$/.test(input[3].value)) {
        input[3].setCustomValidity('Password must be 8 to 15 charactor long');
        e.preventDefault();
        flag = false;
    } else {
        input[3].setCustomValidity(''); // Reset custom validity if valid
    }

    if (input[4].value != input[3].value) {
        input[4].setCustomValidity('Both password should match exactly');
        e.preventDefault();
        flag = false;
    } else {
        input[4].setCustomValidity(''); // Reset custom validity if valid
    }


    if (flag) {
        var obj = {
            name: input[0].value,
            mail: input[1].value,
            mob: input[2].value,
            pass: input[4].value
        }
        users.push(obj);
        localStorage.setItem("user_store",JSON.stringify(users));
    }
});

