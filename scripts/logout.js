
function logout()
{
    localStorage.removeItem("logeduser");
    window.location.replace("../main.html")
}