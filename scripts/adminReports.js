

function FullReports()
{
    var data = JSON.parse(localStorage.getItem("data"));
    var userAttendance = JSON.parse(localStorage.getItem("UserAttend"));

    var adminReportTable = document.getElementById("full_report");
    var table = document.getElementById("admin_table").style.display = "block"
    for (let i = 0; i < data.length; i++) 
    {
        var userName = data[i].userName 
        var tr = document.createElement("tr")
        var td = document.createElement("td")
        td.innerText = data[i].fname + " " + data[i].lname
        tr.appendChild(td)

        var usersData 

        for (let i = 0; i < userAttendance.length; i++) {
            if(userAttendance[i].userName == userName )
            {
                usersData = userAttendance[i].date
                break;
            }
        }
 

    reportTable.replaceChildren();
    if (new Date(usersData[usersData.length - 1]).getDay() == new Date().getDay()) {
        var tr = document.createElement("tr")

        var td = document.createElement("td")
        td.innerText = new Date().getDay() - 2;
        tr.appendChild(td)

        var td = document.createElement("td")
        td.innerText = new Date(usersData[usersData.length - 1]).toTimeString()
        tr.appendChild(td)

        var td = document.createElement("td")
        if (new Date(usersData[usersData.length - 1]).getHours() > 9  ) {
            td.innerText = "late"
        }else{
            td.innerText = ""
        }
        tr.appendChild(td)

        reportTable.append(tr)
    }


        adminReportTable.append(tr);
    }
}
function LateReports(){

}
function ExecuseReports(){

}
function EmployeeBrief(){

}

