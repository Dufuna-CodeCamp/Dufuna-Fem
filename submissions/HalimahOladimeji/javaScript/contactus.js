let submitForm = document.getElementById('validateForm');
let fullName = document.getElementById('fullName');
let emailAddress = document.getElementById('emailAddress');
let subject = document.getElementById('subject');
let message = document.getElementById('message');

function required(field, event) {
    if (field.value == '') {
        field.nextElementSibling.innerHTML = "This field is required";
        event.preventDefault();
        return false
    }
    field.nextElementSibling.innerHTML = "";
    return true;
}

function fullNameFieldValidation(event) {
    let regex = /^[A-Za-z0-9 ]+$/;
    if (!fullName.value.match(regex)) {
        fullName.nextElementSibling.innerHTML = "Your First Name should not include special characters.";
        event.preventDefault();

        if (fullName.value == '')
            fullName.nextElementSibling.innerHTML = "Please enter your Name";
        event.preventDefault();
    }

    else {
        fullName.nextElementSibling.innerHTML = "";
        return true;
    }
}
function emailFieldValidation(event) {
    let emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!emailAddress.value.match(emailRegex)) {
        emailAddress.nextElementSibling.innerHTML = "Please enter a valid email";
        event.preventDefault();

        if (emailAddress.value == '')
            emailAddress.nextElementSibling.innerHTML = "Please enter your Email Address";
        event.preventDefault();
    }

    else {
        emailAddress.nextElementSibling.innerHTML = "";
        return true;
    }
}

function subjectFieldValidation(event) {
    if (subject.value == '') {
        subject.nextElementSibling.innerHTML = "Please enter a message subject";
        event.preventDefault();
    
    }

    else {
        subject.nextElementSibling.innerHTML = "";
        return true;
    }
}

function messageFieldValidation(event) {
    if (message.value == '') {
        message.nextElementSibling.innerHTML = "Please enter your Message";
        event.preventDefault();
        
    }

    else {
        message.nextElementSibling.innerHTML = "";
        return true;
    }
}

function validateForm(e) {
    required(fullName, e);
    required(emailAddress, e);
    required(subject, e);
    required(message, e);
    fullNameFieldValidation(e)
    emailFieldValidation(e);
    subjectFieldValidation(e);
    messageFieldValidation(e);
    return true;
}

submitForm.addEventListener("submit", validateForm);
