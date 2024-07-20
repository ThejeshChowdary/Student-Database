
function users() {
  var content = document.getElementById("content")
  content.innerText=" "
  fetch('http://localhost:3000/singin')
    .then(response => response.json())
    .then(data => {
      const table = document.createElement('table');
      table.setAttribute('border', '1');
      // Create the table header
      const thead = document.createElement('thead');
      const headerRow = thead.insertRow();
      const headers = ['User ID', 'Full Name', 'Password', 'Domain', 'Course', 'Department',"id"];

      headers.forEach(headerText => {
        const th = document.createElement('th');
        th.textContent = headerText;
        headerRow.append(th);
      });

      table.append(thead);

      // Create the table body and append data
      const tbody = document.createElement('tbody');
      tbody.setAttribute('id', 'userTableBody');

      data.forEach(user => {
        const row = tbody.insertRow();
        // Add cells to the row
        row.insertCell().textContent = user.userid;
        row.insertCell().textContent = user.fullname;
        row.insertCell().textContent = user.password;
        row.insertCell().textContent = user.Domain;
        row.insertCell().textContent = user.course || "-";
        row.insertCell().textContent = user.department;
        row.insertCell().textContent = user.id;
      });

      table.append(tbody);

      // Append the table to the body or any other container element
      content.append(table);
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    });
}

function  remove_user()
{
var content = document.getElementById("content")
content.innerText=""

var label = document.createElement("label")
label.textContent="enter the id to delete:"

var input=document.createElement("input")
input.type="text";
input.id="del_item"
var br = document.createElement("br")

var button = document.createElement("button")
button.innerText="Delete"
button.onclick= function rem()
{
  var del_item = document.getElementById("del_item").value
  console.log(del_item)
  fetch('http://localhost:3000/singin'+"/"+del_item,{
    method : "DELETE"
  })
  alert("Deleted Successfully")
}

content.append(label)
content.append(input)
content.append(br)
content.append(button)
  
}



function add_admin()
{

var content = document.getElementById("content")
content.innerText = ""

var userid = document.createElement("label")
userid.innerText = "userid"

var input1 = document.createElement("input")
input1.type = "text";
input1.id = "userid";

var fullname = document.createElement("label")
fullname.innerText = "fullname"

var input2 = document.createElement("input")
input2.type = "text";
input2.id = "fullname";

var password = document.createElement("label")
password.innerText = "password"

var input3 = document.createElement("input")
input3.type = "text";
input3.id = "password";

var domain = document.createElement("label")
domain.innerText = "domain"

var input4 = document.createElement("input")
input4.type = "text";
input4.id = "domain";
input4.placeholder = "domain";

var department = document.createElement("label")
department.innerText = "department"

var input5 = document.createElement("input")
input5.type = "text";
input5.id = "department";

var button = document.createElement("button")
button.innerText = "Add Admin"
var br = document.createElement("br")
var br1 = document.createElement("br")
var br2 = document.createElement("br")
var br3 = document.createElement("br")
var br4 = document.createElement("br")
content.append(br, userid, input1,br1, fullname, input2,br2, password, input3,br3, domain, input4,br4, department, input5, br, button)

button.onclick = function ad() {
    var userid1 = document.getElementById("userid").value
    var fullname1 = document.getElementById("fullname").value
    var password1 = document.getElementById("password").value
    var domain1 = document.getElementById("domain").value  
    var department1 = document.getElementById("department").value

    var formData = {
        userid: userid1,
        fullname: fullname1,
        password: password1,
        Domain: domain1,
        department: department1
    };

    console.log(formData);

    fetch("http://localhost:3000/singin", {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
            "Content-type": "application/json"
        }
    });
    alert("Added Successfully")
}
 
}
