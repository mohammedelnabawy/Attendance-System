function SubmitAttend(){
    var olduserAttend = localStorage.getItem("UserAttend");
    if(olduserAttend === null) olduserAttend = "[]";
    const username = JSON.parse(localStorage.getItem("logeduser")).userName;
    olduserAttend = JSON.parse(olduserAttend);
    var flag = true;
    var date = new Date(); 
    for (let i = 0; i < olduserAttend.length; i++) {
        if(username == olduserAttend[i].userName){
            olduserAttend[i].date.push(date);
            flag = false;
            break;
        }
    }
    if(flag == true){
        UserAttendObject = {"userName":username, "date":[date]};
        olduserAttend.push(UserAttendObject);

    }
    localStorage.setItem("UserAttend", JSON.stringify(olduserAttend));
}
