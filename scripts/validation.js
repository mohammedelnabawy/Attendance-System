var useremail = document.getElementById('email');
var userage = document.getElementById('age');
var userfname = document.getElementById('fname');
var userlname = document.getElementById('lname');
var subminInput = document.getElementById('addlocal');
var message = document.getElementById('messageError');
var vaildEmail=false
var vaildLastname=false
var vaildFirstName=false
var vaildage=false

window.addEventListener('load',function(){

    useremail.addEventListener('blur',function(){
        if (!emailvalidation()) {
            vaildEmail=false;
            useremail.style.border = "1px solid red";
        } else {
            vaildEmail=true;
            useremail.style.border = "1px solid green";
        }
        toggleDisabled();
    });

    userage.addEventListener('blur',function(){
        if (!agevalidation()) {
            vaildage=false
            userage.style.border = "1px solid red";
        } else {
            vaildage=true
            userage.style.border = "1px solid green";
        }
        toggleDisabled();
    });

    userfname.addEventListener('blur',function(){
        if (!fnamevalidation()) {
            vaildFirstName=false
            userfname.style.border = "1px solid red";
        } else {
            vaildFirstName=true
            userfname.style.border = "1px solid green";
        }
        toggleDisabled();
    });

    userlname.addEventListener('blur',function(){
        if (!lnamevalidation()) {
            vaildLastname=false
            userlname.style.border = "1px solid red";
        } else {
            vaildLastname=true
            userlname.style.border = "1px solid green";
        }
        toggleDisabled();
    });
    
})


function toggleDisabled ()
{
    if( vaildEmail == true  && vaildLastname == true  && vaildFirstName == true && vaildage == true )
    {
        subminInput.disabled = false;
    }
    else 
    {
        message.style.display = "block";
    }
}
function emailvalidation() {
    return useremail.value.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/);
}

function agevalidation() {
    return age.value.match(/^[0-9]{1,2}$/);
}

function fnamevalidation() {
    return userfname.value.match(/^[A-Za-z]+$/);
}

function lnamevalidation() {
    return userlname.value.match(/^[A-Za-z]+$/);
}