useremail = document.getElementById('email');
userage = document.getElementById('age');
userfname = document.getElementById('fname');
userlname = document.getElementById('lname');

window.addEventListener('load',function(){
    useremail.addEventListener('blur',function(){
        if (!emailvalidation()) {
            useremail.style.border = "1px solid red";
            // useremail.style.display = 'block';
        } else {

            useremail.style.border = "1px solid green";
        }
    });
    userage.addEventListener('blur',function(){
        if (!agevalidation()) {
            userage.style.border = "1px solid red";
            // userage.style.display = 'block';
        } else {

            userage.style.border = "1px solid green";
        }
    });

    userage.addEventListener('blur',function(){
        if (!fnamevalidation()) {
            userfname.style.border = "1px solid red";
            // userfname.style.display = 'block';
        } else {

            userfname.style.border = "1px solid green";
        }
    });

    userage.addEventListener('blur',function(){
        if (!lnamevalidation()) {
            userlname.style.border = "1px solid red";
            // userlname.style.display = 'block';
        } else {

            userlname.style.border = "1px solid green";
        }
    });
})


function emailvalidation() {
    return useremail.value.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/);
}

function agevalidation() {
    return age.value.match(/^[0-9]{1,2}$/);
}

function fnamevalidation() {
    return age.value.match(/^[A-Za-z]+$/);
}

function lnamevalidation() {
    return age.value.match(/^[A-Za-z]+$/);
}