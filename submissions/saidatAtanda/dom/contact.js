let contactForm = document.getElementById('contactform');
let fullName = document.getElementById('fullname');
let emailAddress = document.getElementById('email');
let messageSubject = document.getElementById('subject');
let message = document.getElementById('message');
const nameRegex = /^[A-Za-z]+$/;
const emailAddressRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

function fieldValidation(field, regex, error1, error2, event) {
    if (field.value == ''){
        field.nextElementSibling.innerHTML = error1;
        event.preventDefault();
    } else if (!field.value.match(regex)){
        field.nextElementSibling.innerHTML = error2;
        event.preventDefault();
        return false;
    } else {
        field.nextElementSibling.innerHTML = "";
        return true;
    }
}

function messageValidation (field, error, event) {
    if (field.value == ''){
        field.nextElementSibling.innerHTML = error;
        event.preventDefault();
        return false;
    } else {
        field.nextElementSibling.innerHTML = "";
        return true;
    }
}

function contactFormValidation(e) {
    fieldValidation(fullName, nameRegex, "Please enter your Name", "Please enter letters only", e)
    fieldValidation(emailAddress, emailAddressRegex, "Please enter your Email Address", "Please enter a valid email", e)
    messageValidation(messageSubject, "Please enter a message subject", e)
    messageValidation(message, "Please enter your Message", e)
    return true;
}

contactForm.addEventListener("submit", contactFormValidation);