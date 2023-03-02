var userBtn= document.getElementById("userBtn");
var data =  JSON.parse(localStorage.getItem("logeduser"));

userBtn.innerText = data.userName


