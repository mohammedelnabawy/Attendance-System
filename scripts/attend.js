function SubmitAttend(){
    console.log("mohammed")
    var olduserAttend = localStorage.getItem("UserAttend");
    if(olduserAttend === null) olduserAttend = "[]";

    const username = JSON.parse(localStorage.getItem("logeduser")).userName;
    olduserAttend = JSON.parse(olduserAttend);
    var flag = true;
    var date = new Date(); 
    // for (let i = 0; i < olduserAttend.length; i++) {
    //     if(username == olduserAttend[i].userName){
    //         olduserAttend[i].date.push(date);
    //         flag = false;
    //         break;
    //     }
    // }
    console.log("mohammed")
    console.log(olduserAttend);
    // if(flag == true){
        UserAttendObject = {"userName":"username", "date":[date]};
        console.log(UserAttendObject);
        olduserAttend.push(UserAttendObject);

    // }
    localStorage.setItem("UserAttend", JSON.stringify(olduserAttend));
}



// var old = localStorage.getItem("data");
// if(old === null) old = "[]";

// var inputData = {"userName":userName, "fname":f_name, "lname":l_name, "Address":add, "email":ema, "age":age, "password":pass};
// Sendmail(inputData)
// var before = JSON.parse(old);
// before.push(inputData);
// localStorage.setItem("data", JSON.stringify(before));