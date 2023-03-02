function MonthelyReport ()
{

    const user = JSON.parse(localStorage.getItem("logeduser"));
    const userAttendance = JSON.parse(localStorage.getItem("UserAttend"));
    let reportTable = document.getElementById("table_body")
    var attend = {}
  
  

    const cuurentMonth = (new Date().getMonth() + 1 ); 
    var usersData 

    for (let i = 0; i < userAttendance.length; i++) {
        if(userAttendance[i].userName == user.userName )
        {
            usersData = userAttendance[i].date
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
    console.log(attendDays)

}



function dailyReports ()
{
    
}




