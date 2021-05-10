let submitForm = document.getElementById('validateForm');
let fullName = document.getElementById('fullName');
let email = document.getElementById('email');
let subject = document.getElementById('subject');
let comments = document.getElementById('comments');



// function required(field,event) {
//     if (field.value == '') {
//         field.nextElementSibling.innerHTML = "This field is required";
//         event.preventDefault();
//         return false; 
//     } else{
//         field.nextElementSibling.innerHTML = '';
//         return true;
//     }
// }

function fullnameValidation(fullName,event) {
    let fnRegex = /^[a-zA-Z]+$/;
    if (fullName.value == "") {
        fullName.nextElementSibling.innerHTML = "Please enter your Name";
        event.preventDefault();
        return false;
    }
     else if (!fullName.value.match(fnRegex)) {
        fullName.nextElementSibling.innerHTML = "Only letters are allowed";
        event.preventDefault();
        return false;
    } else {
        fullName.nextElementSibling.innerHTML = "";
        return true;
    }
}

function emailValidation(email,event) {
    let emailRegex =/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (email.value == "") {
        email.nextElementSibling.innerHTML = "Please enter your Email Address";
        event.preventDefault();
        return false;
    } else if (!(email.value.match(emailRegex))) {
        email.nextElementSibling.innerHTML = "Please enter a valid email";
        event.preventDefault();
        return false;
    } else {
        email.nextElementSibling.innerHTML = '';
        return true;
    }
}

function subjectval(subject,event) {
    if (subject.value == '') {
        subject.nextElementSibling.innerHTML = "Please enter a message subject";
        event.preventDefault();
        return false; 
    } else{
        field.nextElementSibling.innerHTML = '';
        return true;
    }
}

function commentsval(comments,event) {
    if (comments.value == '') {
        comments.nextElementSibling.innerHTML = "Please enter your Message";
        event.preventDefault();
        return false; 
    } else{
        field.nextElementSibling.innerHTML = '';
        return true;
    }
}
function validateForm(e) {
     subjectval(subject, e);
     commentsval(comments, e);
     fullnameValidation(fullName,e);
     emailValidation(email,e);
     return true;
}

submitForm.addEventListener("submit",validateForm);
