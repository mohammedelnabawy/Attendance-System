window.addEventListener('load', function () {
    const obj = JSON.parse(localStorage.getItem("logeduser"));
    document.getElementById("fname").value = obj.fname;
    document.getElementById("lname").value = obj.lname;
    document.getElementById("Address").value = obj.Address;
    document.getElementById("email").value = obj.email;
    document.getElementById("age").value=obj.age;
});//end of load

