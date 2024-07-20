
function details()
{
 var detail = document.getElementById("details")
 var user = localStorage.getItem("userid")
 fetch("http://localhost:3000/singin")
 .then(response => response.json())
 .then(data => {
   var data1 = data
  
   const user1 = data1.find(u => u.userid == user)
   
   

   var userid = document.createElement("label")
userid.innerText = "Userid"

var input1 = document.createElement("input")
input1.value = user1.userid;
input1.id = "userid";

var fullname = document.createElement("label")
fullname.innerText = "Fullname"

var input2 = document.createElement("input")
input2.value = user1.fullname;
input2.id = "fullname";



var domain = document.createElement("label")
domain.innerText = "Domain"

var input4 = document.createElement("input")
input4.value = "student";
input4.id = "domain";

var course = document.createElement("label")
course.innerText = "course"

var input7 = document.createElement("input")
input7.value = user1.course;
input7.id = "course";


var department = document.createElement("label")
department.innerText = "department"

var input5 = document.createElement("input")
input5.value = user1.department;
input5.id = "department";

var id1 = document.createElement("label")
id1.innerText = "id"

var input6 = document.createElement("input")
input6.value = user1.id;

localStorage.setItem("id",user1.id)

var button = document.createElement("button")
button.innerText = "Edit"
button.onclick = function()
{
    button.style.display='none'
    var button1 = document.createElement("button")
    button1.innerText="Update"
   // var id_main = user1.id
    detail.append(button1)
    input1.value=""
    input2.value=""
    input4.value="student"
    input5.value=""
    input6.value=""
    input7.value=""
    button1.onclick = function()
    {
       
        var userid1 = document.getElementById("userid").value
        var fullname1 = document.getElementById("fullname").value
        var password1 = localStorage.getItem("password")
        document.getElementById("domain").readOnly = true;
        
        var course1 = document.getElementById("course").value
        var department1 = document.getElementById("department").value
    
        var formData = {
            userid: userid1,
            fullname: fullname1,
            password:password1,
            Domain: "student",
            course:course1,
            department: department1
        };
    
        console.log(formData);
        var main_id = localStorage.getItem("id")
        fetch("http://localhost:3000/singin"+"/"+main_id, {
            method: "PUT",
            body: JSON.stringify(formData),
            headers: {
                "Content-type": "application/json"
            }
        });
        alert("Added Successfully")
        button.style.display="inline-block"
        button1.style.display="none"
    }
}

var br = document.createElement("br")
var br1 = document.createElement("br")
var br2 = document.createElement("br")
var br3 = document.createElement("br")
var br4 = document.createElement("br")
var br5 = document.createElement("br")
detail.append(br, userid, input1,br1, fullname, input2,br2, domain, input4,br4,course,input7,br5, department, input5,br3,id1,input6, br, button)


 });
 
}
details()
