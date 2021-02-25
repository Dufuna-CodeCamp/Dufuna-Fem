let submitForm = document.getElementById('validateForm');
let fullName = document.getElementById('fullName');
let email = document.getElementById('email');
let subject = document.getElementById('subject');
let message = document.getElementById('message');
let fullNameRegex = /^[A-Za-z ]+$/;
let emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
let subjectRegex = /^[A-Za-z ]+$/;
//Checking the form fields
function required(field, regex, first_error, sec_error, event) {
    if (field.value === "") {
        field.nextElementSibling.innerHTML = first_error;
        event.preventDefault();
        return false;
    } else if (!field.value.match(regex)) {
        field.nextElementSibling.innerHTML = sec_error;
        event.preventDefault();
        return false;
    } else {
        field.nextElementSibling.innerHTML = "";
        return true;
    }
}

function checkmessage(event) {
    if (message.value === "") {
        message.nextElementSibling.innerHTML = "Please enter a subject message";
        event.preventDefault();
        return false;
    } else if (message.value.length <= 150) {
        message.nextElementSibling.innerHTML = "Please input alphabet characters only";
        event.preventDefault();
        return false;
    } else {
        message.nextElementSibling.innerHTML = "";
        return true;
    }
}
//Form Validation
function validateForm(e) {
    required(fullName, fullNameRegex, "Please enter your Name", "Please input alphabet characters only", e);
    required(email, emailRegex, "Please enter your Email Address", "Please enter a valid email", e);
    required(subject, subjectRegex, "Please enter a subject message", "Please input alphabet characters only", e);
    checkmessage(e);
    return true;
}
submitForm.addEventListener("submit", validateForm);