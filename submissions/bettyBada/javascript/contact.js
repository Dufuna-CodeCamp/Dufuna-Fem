let submitForm = document.getElementById("validateForm");
let fullName = document.getElementById('fullName');
let email = document.getElementById('email');
let subject = document.getElementById('subject');
let message = document.getElementById("textarea");


function fullNameValidation(field,event) {
    let regExp = /\W/;
    if (field.value == '') {
        field.nextElementSibling.innerHTML = "Please enter your Name";
        event.preventDefault();
    } else if (field.value.match(regExp)) {
        field.nextElementSibling.innerHTML = "Please do not enter special characters";
        event.preventDefault();
    } else {
        field.nextElementSibling.innerHTML = "";
    }
}

function emailValidation(field, event) {
    let regExp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (field.value == '') {
        field.nextElementSibling.innerHTML = "Please enter your Email Address";
        event.preventDefault();
    } else if (!field.value.match(regExp)) {
        field.nextElementSibling.innerHTML = "Please enter a valid email";
        event.preventDefault();
    } else {
        field.nextElementSibling.innerHTML = "";
    }
}

function subjectValidation(field,event) {
    if (field.value == '') {
        field.nextElementSibling.innerHTML = "Please enter a message subject";
        event.preventDefault();
    } else {
        field.nextElementSibling.innerHTML = "";
    }
}

function messageValidation(field,event) {
    if (field.value == '') {
        field.nextElementSibling.innerHTML = "Please enter your message";
        event.preventDefault();
    } else {
        field.nextElementSibling.innerHTML = "";
    }
}

function validateForm(e) {
    fullNameValidation(fullName,e);
    emailValidation(email, e);
    subjectValidation(subject, e);
    messageValidation(message, e);
}
submitForm.addEventListener("submit", validateForm);