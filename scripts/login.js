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
    for (let i = 0; i < before.length; i++) {
        if (user == before[i].userName && pass == before[i].password) {
            
            setTimeout("location.href = 'profile.html';",1000);
            break;
        }else {
            alert('ERROR.');
            break;
      }
    }
}