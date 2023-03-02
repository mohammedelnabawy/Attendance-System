function Sendmail(data){
    console.log(data.email)
    
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "aabro2136@gmail.com",
        Password : "AB9B924F10D4ECE209D3944ACD4A302D1748",
        To : data.email ,
        From : "mohammedelnabawy11@gmail.com",
        Subject : "New registration info ! ",
        Body : `
        <h4>Employee Data</h4>
        <table width="100%" border="1">
        <thead>
          <tr>
            <th>Full-Name</th>
            <th>Address</th>
            <th>Email</th>
            <th>Age</th>
            <th>User Name</th>
            <th>Password</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>${data.fname}  ${data.lname}</th>
            <td>${data.address}</td>
            <td>${data.email}</td>
            <td>${data.age}</td>
            <td>${data.userName}</td>
            <td>${data.password}</td> 
          </tr>
        </tbody>
      </table>      
        `
    })
}

