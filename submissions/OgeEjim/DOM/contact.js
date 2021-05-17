let submitForm = document.getElementById('validateForm');
let fullName = document.getElementById('fullName');
let email = document.getElementById('email');
let subject = document.getElementById('subject');
let comments = document.getElementById('comments');


function required(field,event) {
    let fnRegex = /^[a-zA-Z]+$/;
    let emailRegex =/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (field.value == "") {
        fullName.nextElementSibling.innerHTML = "Please enter your Name";
        email.nextElementSibling.innerHTML = "Please enter your Email Address";
        event.preventDefault();
        return false;
    }else if (!fullName.value.match(fnRegex))  {
        fullName.nextElementSibling.innerHTML = "Only letters are allowed";
    }else if (!(email.value.match(emailRegex))) {
            email.nextElementSibling.innerHTML = "Please enter a valid email";
            event.preventDefault();
            return false;
    }else {
        field.nextElementSibling.innerHTML = "";
        return true;
    }
}

function compulsory(field,event) {
    if (field.value == '') {
        subject.nextElementSibling.innerHTML = "Please enter a message subject";
        comments.nextElementSibling.innerHTML = "Please enter your Message";
        event.preventDefault();
        return false; 
    } else{
        field.nextElementSibling.innerHTML = '';
        return true;
    }
}

function validateForm(e) {
    required(fullName,e);
    required(email,e);  
    compulsory(subject, e);
    compulsory(comments, e);
    return true;
}

submitForm.addEventListener("submit",validateForm);
