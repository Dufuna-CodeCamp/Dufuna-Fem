let submitForm = document.getElementById('validateForm');
let fullName = document.getElementById('fullName');
let email = document.getElementById('email');
let subject = document.getElementById('subject');
let message = document.getElementById('message');
let fullNameRegex = /^[A-Za-z]+$/;
let emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
let subjectRegex = /^[A-Za-z]+$/;
let messageRegex = /^[A-Za-z]+$/;


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

function validateForm(e) {
    required(fullName, fullNameRegex, "Please enter your Name", "Please input alphabet characters only", e);
    required(email, emailRegex, "Please enter your Email Address", "Please enter a valid email", e);
    required(subject, subjectRegex, "Please enter a message", "Please input alphabet characters only", e);
    required(message, messageRegex, "Please enter your message", "Please input alphabet characters only", e);
    return true;
}
submitForm.addEventListener("submit", validateForm);