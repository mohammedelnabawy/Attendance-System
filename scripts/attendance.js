var userBtn= document.getElementById("userDef");
var data =  JSON.parse(localStorage.getItem("logeduser"));

userBtn.innerHTML = "<span style='color:green'>Name : </span>  " + data.userName


