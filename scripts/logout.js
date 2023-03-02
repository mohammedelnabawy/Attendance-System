
function logout() {
    localStorage.removeItem("currentUser");
    window.location.replace("../index.html")
}