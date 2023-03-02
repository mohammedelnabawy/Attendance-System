function MonthelyReport ()
{
    const user = JSON.parse(localStorage.getItem("logeduser"));
    const userAttendance = JSON.parse(localStorage.getItem("UserAttend"));
    let reportTable = document.getElementById("table_body")
    document.getElementById("Monthely").style.display='block';
    document.getElementById("daily").style.display='none';  
    var attend = {}

    const cuurentMonth = (new Date().getMonth() + 1 ); 
    var usersData 

    for (let i = 0; i < userAttendance.length; i++) {
        if(userAttendance[i].userName == user.userName )
        {
            usersData = userAttendance[i].date
            break;
        }
    }

    var res = {1:[],2:[],3:[],4:[],5:[],6:[],7:[],8:[],9:[],10:[],11:[],12:[]}
    for (let i = 1; i <= 12; i++) {
        for (let o = 0; o < usersData.length ; o++) {
            if((new Date(usersData[o]).getMonth() + 1 ) ==  i)
            {
                res[i].push(usersData[o])
            }
        }        
    }


    reportTable.replaceChildren();
    for (let i = 1; i <= 12; i++) {
        var attendDays = res[i].length
        var absentDays = (30 - res[i].length)
        var lateDays = 0
        for (let y = 0; y < res[i].length ; y++) {
            if (new Date(res[i][y]).getHours() > 9  ) {
                lateDays++
            }
        }
        var tr = document.createElement("tr")
        var td = document.createElement("td")
        td.innerText = i
        tr.appendChild(td)
        var td = document.createElement("td")
        td.innerText = attendDays
        tr.appendChild(td)
        var td = document.createElement("td")
        td.innerText = absentDays
        tr.appendChild(td)
        var td = document.createElement("td")
        td.innerText = lateDays
        tr.appendChild(td)
        reportTable.append(tr)
    }

}



function dailyReports ()
{
    const user = JSON.parse(localStorage.getItem("logeduser"));
    const userAttendance = JSON.parse(localStorage.getItem("UserAttend"));
    let reportTable = document.getElementById("daily_table_body")
    document.getElementById("Monthely").style.display='none';
    document.getElementById("daily").style.display='block';  
    var attend = {}

    var usersData 
    for (let i = 0; i < userAttendance.length; i++) {
        if(userAttendance[i].userName == user.userName )
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

}




