var table = document.querySelector("table");
var emp_list = [];

var data = JSON.parse(localStorage.getItem('storage'));
if (data) {
    emp_list = data
    for(var i=0;i<emp_list.length;i++){
        table.innerHTML += "<tr><td>"+emp_list[i].emp_name+"</td><td>"+emp_list[i].emp_dob+"</td><td>"+emp_list[i].emp_mail+"</td></tr>";
    }
}
