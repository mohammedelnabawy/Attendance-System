function addtolocal(){
    var f_name = document.getElementById("fname").value;
    var l_name = document.getElementById("lname").value;
    var add = document.getElementById("Address").value;
    var ema = document.getElementById("email").value;
    var age = document.getElementById("age").value;

    var old = localStorage.getItem("data");
    if(old === null) old = "[]";

    var inputData = {"user1":{"fname":f_name, "lname":l_name, "Address":add, "email":ema, "age":age}};
    var before = JSON.parse(old);
    before.push(inputData);
    localStorage.setItem("data", JSON.stringify(before));

    console.log(localStorage.getItem("data"));
}