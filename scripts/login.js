login = document.getElementById('GOlogin');
login.addEventListener('click',async function(e) {
    e.preventDefault();
    GOlogin();
})

function GOlogin(){
    var user = document.getElementById("userName").value;
    var pass = document.getElementById("pass").value;
    var old = localStorage.getItem("data");
    var before = JSON.parse(old);
    success=false
    for (let i = 0; i < before.length; i++) {
        if (user == before[i].userName && pass == before[i].password) {
            success=true
            var objectuserdata = {"userName":before[i].userName, "fname":before[i].fname, "lname":before[i].lname, "Address":before[i].Address, "email":before[i].email, "age":before[i].age, "password":before[i].password};
            localStorage.setItem("logeduser", JSON.stringify(objectuserdata));
            setTimeout("location.href = 'Profile.html';",1000);
            break;
        }
    }
    if(success==false)
    {
        alert("Error in username or password")
    }
}   