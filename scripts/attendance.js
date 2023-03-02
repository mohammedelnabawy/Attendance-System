var userBtn= document.getElementById("userDef");
var data =  JSON.parse(localStorage.getItem("logeduser"));

userBtn.innerText = data.userName


