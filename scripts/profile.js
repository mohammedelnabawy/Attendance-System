window.addEventListener('load', function () {
    const obj = JSON.parse(localStorage.getItem("logeduser"));
    // const txt = '{"FirstName":"Mohammed", "LastName":"El-Nabawy", "Address":"Cairo","Email":"mohammedelnabawy11@gmail.com", "age":30}';
    
    document.getElementById("fname").value = obj.fname;
    document.getElementById("lname").value = obj.lname;
    document.getElementById("Address").value = obj.Address;
    document.getElementById("email").value = obj.email;
    document.getElementById("age").value=obj.age;
});//end of load

