var logedUser = JSON.parse(localStorage.getItem("logeduser"))
var userButtons = document.getElementById("employees")
var adminButtons = document.getElementById("admin")
var userButtonsAttendance = document.getElementsByClassName("employees")[0]





if (logedUser.userName == "admin")
{
    userButtons.style.display = "none"
    adminButtons.style.display = "block"
    userButtonsAttendance.style.display = "none"
}else {
    userButtons.style.display = "block"
    adminButtons.style.display = "none"
    userButtonsAttendance.style.display = "block"
}