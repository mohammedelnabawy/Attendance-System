window.addEventListener('load', function () {
    const txt = '{"FirstName":"Mohammed", "LastName":"El-Nabawy", "Address":"Cairo","Email":"mohammedelnabawy11@gmail.com", "age":30}';
    const obj = JSON.parse(txt);
    document.getElementById("fname").value = obj.FirstName;
    document.getElementById("lname").value = obj.LastName;
    document.getElementById("Address").value = obj.Address;
    document.getElementById("email").value = obj.Email;
    document.getElementById("age").value=obj.age;
});//end of load

