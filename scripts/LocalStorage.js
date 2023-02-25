function generateName() {
    let length = 7,
    charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",
    retVal = "";
    for (let i = 0, n = charset.length; i < length; ++i) {
        retVal += charset.charAt(Math.floor(Math.random() * n));
    }
    return retVal;}

userName = generateName();

function generatePassword() {
    let length = 4,
    charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",
    retVal = "";
    for (let i = 0, n = charset.length; i < length; ++i) {
        retVal += charset.charAt(Math.floor(Math.random() * n));
    }
    return retVal;}

pass = generatePassword();

function addtolocal(){
    var f_name = document.getElementById("fname").value;
    var l_name = document.getElementById("lname").value;
    var add = document.getElementById("Address").value;
    var ema = document.getElementById("email").value;
    var age = document.getElementById("age").value;

    var old = localStorage.getItem("data");
    if(old === null) old = "[]";

    var inputData = {"userName":userName, "fname":f_name, "lname":l_name, "Address":add, "email":ema, "age":age, "password":pass};
    var before = JSON.parse(old);
    before.push(inputData);
    localStorage.setItem("data", JSON.stringify(before));
}