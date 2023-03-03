function FullReports()
{
    var data = JSON.parse(localStorage.getItem("data"));
    var userAttendance = JSON.parse(localStorage.getItem("UserAttend"));
    var adminReportTable = document.getElementById("full_report");
    document.getElementById("admin_table").style.display = "block"
    document.getElementById("admin_table_late").style.display = "none"
    document.getElementById("admin_table_employee_brief").style.display = "none"

    adminReportTable.replaceChildren();


    for (let i = 0; i < userAttendance.length; i++) {
        var username = userAttendance[i].userName
        for (let j = 0; j < data.length; j++) {
            if (username == data[i].userName) {
                var fullname = data[i].fname + ' ' + data[i].lname;
                break;
            }
        }

        var tr = document.createElement("tr")
        var td = document.createElement("td")
        td.innerText = fullname
        tr.appendChild(td)

        if (new Date(userAttendance[i].date[userAttendance[i].date.length - 1]).getDay() == new Date().getDay()) {
            var td = document.createElement("td")
            td.innerText = new Date(userAttendance[i].date[userAttendance[i].date.length - 1]).toTimeString();
            tr.appendChild(td)

            var td = document.createElement("td")
            if (new Date(userAttendance[i].date[userAttendance[i].date.length - 1]).getHours() > 9  ) {
                td.innerText = "late"
            }else{
                td.innerText = ""
            }
            tr.appendChild(td)

            var td = document.createElement("td")
            td.innerText="--";
            tr.appendChild(td)
            adminReportTable.append(tr)

        }else{
            var td = document.createElement("td")
            td.innerText = " ";
            tr.appendChild(td)

            var td = document.createElement("td")
            td.innerText=" ";
            tr.appendChild(td)

            var td = document.createElement("td")
            td.innerText=" absent ";
            tr.appendChild(td)
            adminReportTable.append(tr)
        }
    }

}
function LateReports(){
    var data = JSON.parse(localStorage.getItem("data"));
    var userAttendance = JSON.parse(localStorage.getItem("UserAttend"));
    var adminReportTable = document.getElementById("full_report_late");
    document.getElementById("admin_table_late").style.display = "block"
    document.getElementById("admin_table").style.display = "none"
    document.getElementById("admin_table_employee_brief").style.display = "none"

    adminReportTable.replaceChildren();

    for (let i = 0; i < userAttendance.length; i++) {
        var username = userAttendance[i].userName
        for (let j = 0; j < data.length; j++) {
            if (username == data[i].userName) {
                var fullname = data[i].fname + ' ' + data[i].lname;
                break;
            }
        }        
        var tr = document.createElement("tr")
        var td = document.createElement("td")
        td.innerText = fullname
        tr.appendChild(td)
        
        if (new Date(userAttendance[i].date[userAttendance[i].date.length - 1]).getDay() == new Date().getDay()) {
            var td = document.createElement("td")
            if (new Date(userAttendance[i].date[userAttendance[i].date.length - 1]).getHours() > 9  ) {
                td.innerText = "late"
            }else{
                td.innerText = ""
            }
            tr.appendChild(td)
        }
        adminReportTable.append(tr)
    }

}
function EmployeeBrief(){
    var data = JSON.parse(localStorage.getItem("data"));
    var adminReportTable = document.getElementById("full_report_brief");
    document.getElementById("admin_table_late").style.display = "none"
    document.getElementById("admin_table").style.display = "none"
    document.getElementById("admin_table_employee_brief").style.display = "block"

    adminReportTable.replaceChildren();
    for (let i = 0; i < data.length; i++) {
        var tr = document.createElement("tr")
        var td = document.createElement("td")
        td.innerText = data[i].fname
        tr.appendChild(td)

        var td = document.createElement("td")
        td.innerText = data[i].lname
        tr.appendChild(td)

        var td = document.createElement("td")
        td.innerText = data[i].Address
        tr.appendChild(td)

        var td = document.createElement("td")
        td.innerText = data[i].email
        tr.appendChild(td)

        var td = document.createElement("td")
        td.innerText = data[i].age
        tr.appendChild(td)

        adminReportTable.append(tr)
    }
}
