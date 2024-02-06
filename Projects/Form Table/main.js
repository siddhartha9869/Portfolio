var empname = document.querySelector("#name");
var empmonth = document.querySelector("#month");
var empdate = document.querySelector("#date");
var empyear = document.querySelector("#year");
var empmail = document.querySelector("#email");
var submit = document.querySelector("button");
var mydiv = document.querySelector("#container");
var table = document.querySelector("table");
var form = document.querySelector("form");
var empdob;


var storage = [];
lcl_storage = JSON.parse(localStorage.getItem('storage'));
if (lcl_storage) {
    storage = lcl_storage;
}
function addItem() {
    
    empdob = empmonth.value+" "+empdate.value+", "+empyear.value;
    var obj = {
        emp_name: empname.value,
        emp_dob: empdob,
        emp_mail: empmail.value
    };
    storage.push(obj);
    localStorage.setItem("storage",JSON.stringify(storage));
}

// document.write(empname.value+empdob+empmail.value);

// var ul = document.createElement("ul");
// var newstorage = []
// mydiv.append(ul);
// var local_storage=JSON.parse(localStorage.getItem("storage"));
// if (local_storage) {
//     storage=local_storage;
//     for(var i=0;i<storage.length;i++){
//         table.innerHTML += "<tr><td>"+storage[i].emp_name+"</td><td>"+storage[i].emp_dob+"</td><td>"+storage[i].emp_mail+"</td></tr>";
//     }
// }
// var disp = true;
// function show() {
//     if (disp) {
//         disp = false;
//         form.style.display = "none";
//     } else {
//         form.style.display = "block";
//         disp = true;
//     }
// }