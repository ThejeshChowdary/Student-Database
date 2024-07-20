// // var newinfo={
// //   "name": "usha",
// //   "class":2,
// //   "gender":"female"
// // }
// // function fetch1(){
// // fetch("http://localhost:3000/student/name")
// //   .then(response => response.json())
// //   .then(data => console.log(data));
// // }
// // function post(){
// //   fetch("http://localhost:3000/student", {
// //       method: "POST",
// //       body: JSON.stringify(newinfo),
// //       headers: {
// //           "Content-type": "application/json"
// //       }
// //   });
// // }
//  function delete1()
// {
//   fetch("http://localhost:3000/student/6",{
//     method: "DELETE"
// })
// }
// // function put()
// // {
// //   fetch("http://localhost:3000/student/8", {
// //         method: "PUT",
// //         body: JSON.stringify(newinfo),
// //         headers: {
// //             "Content-type": "application/json"
// //    }
// // });
// // }
// function post(){
//   let fullname=document.getElementById("fullname").value
// let section =document.getElementById("class").value
// let gender = document.getElementById("gender").value

// var formData = {
//   name: fullname,
//   class:section,
//   Gender:gender
// };
//  console.log(formData)
//  fetch("http://localhost:3000/student", {
//         method: "POST",
//         body: JSON.stringify(formData),
//         headers: {
//             "Content-type": "application/json"
//         }
//     });

// }
// function fetch1()
// {
//   var fullname = document.getElementById("fullname").value
//   fetch("http://localhost:3000/student")
//   .then(response => response.json())
//   .then(data => {
//     var data1 = data
//     console.log(data1)
//     var find = data1.filter(student => student.name == fullname)
//     if(find.length > 0)
//       console.log(Object.entries(find))


function admin()
{
    var userid = document.getElementById("userid-admin").value
    var password = document.getElementById("password-admin").value
   // console.log(userid,password)


   fetch("http://localhost:3000/singin")
  .then(response => response.json())
  .then(data => {
    var data1 = data
   
    const user = data1.find(u => u.userid == userid)
    //? user.password : null;)
    console.log(user)
    if(user !== undefined )
    {
        if(user.password == password && user.Domain == "admin")
        {
            window.location.href="admin.html"
        }
    
    else
    {
        alert("entered password is wrong (or) check the domain")
    }
    }
    else
    {
        alert("entered userid is wrong")
    }

  });
}


function student()
{
    var userid = document.getElementById("userid-student").value
    var password = document.getElementById("password-student").value

    localStorage.setItem("userid",userid)
    localStorage.setItem("password",password)
   // console.log(userid,password)



   fetch("http://localhost:3000/singin")
  .then(response => response.json())
  .then(data => {
    var data1 = data
   
    const user = data1.find(u => u.userid == userid)
    //? user.password : null;)
    console.log(user)
    if(user !== undefined )
    {
        if(user.password == password && user.Domain == "student")
        {
            window.location.href="student.html"
        }
    
    else
    {
        alert("entered password is wrong (or) check the domain")
    }
    }
    else
    {
        alert("entered userid is wrong")
    }

  });
}

function post()
{
    var userid = document.getElementById("userid-new").value
    var fullname = document.getElementById("fullname-new").value
    var password = document.getElementById("password-new").value
    //var domain = document.getElementById("domain-new").value
    var course = document.getElementById("course-new").value
    var department = document.getElementById("department-new").value

    fetch("http://localhost:3000/singin")
  .then(response => response.json())
  .then(data => {
    var data1 = data
   
    const user = data1.find(u => u.userid == userid)

    if(user == undefined)
    {
        var formData = {
            userid: userid,
           fullname:fullname,
           password:password,
           Domain:"student",
           course:course,
           department:department
 
         };
           console.log(formData)
         
         
          fetch("http://localhost:3000/singin", {
                 method: "POST",
                 body: JSON.stringify(formData),
                 headers: {
                     "Content-type": "application/json"
                 }
             });
             alert("Created successfully")
    }
    else{
        alert("userid already exists!! add some numbers/special chars")
    }

  });

  

    
}
