let submitForm = document.getElementById("validateForm");
let firstName = document.getElementById("firstName");
let lastName = document.getElementById("lastName");
let otherName = document.getElementById("otherName");
let phoneNumber = document.getElementById("number");
let email = document.getElementById('email');
let password = document.getElementById("password");
let confirmPassword = document.getElementById("confirmPassword");

function firstNameValidation(field, event) {
    let regExp = /\W/;
    if (field.value == '') {
        field.nextElementSibling.innerHTML = "Please enter your First Name";
        event.preventDefault();
    } else if (field.value.match(regExp)) {
        field.nextElementSibling.innerHTML = "Please do not enter special characters";
        event.preventDefault();
    } else {
        field.nextElementSibling.innerHTML = "";
    }
}

function lastNameValidation(field, event) {
    let regExp = /\W/;
    if (field.value == '') {
        field.nextElementSibling.innerHTML = "Please enter your Last Name";
        event.preventDefault();
    } else if (field.value.match(regExp)) {
        field.nextElementSibling.innerHTML = "Please do not enter special characters";
        event.preventDefault();
    } else {
        field.nextElementSibling.innerHTML = "";
    }
}

function phoneNumberValidation(field, event) {
    let regExp = /^\+?\d+$/;
    if (field.value == '') {
        field.nextElementSibling.innerHTML = "Please enter your Phone Number";
        event.preventDefault();
    } else if (!field.value.match(regExp)) {
        field.nextElementSibling.innerHTML = "Please enter a valid phone number";
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

function passwordValidation(field, event) {
    let regExp = /^(?=.*\d)(?=.*[A-Z])(?!.*[^a-zA-Z0-9\W])(.{6,})$/;
    if (field.value == '') {
        field.nextElementSibling.innerHTML = "Please enter your Password";
        event.preventDefault();
    } else if (!field.value.match(regExp)) {
        field.nextElementSibling.innerHTML = "Your password should have a minimum of 6 characters, 1 capital letter, 1 special character eg @ and 1 number.";
        event.preventDefault();
    } else {
        field.nextElementSibling.innerHTML = "";
    }
}

function confirmPasswordValidation(field, event) {
    let password = document.getElementById("password");
    if (field.value == '') {
        field.nextElementSibling.innerHTML = "Please confirm your Password";
        event.preventDefault();
    } else if (field.value !== password.value) {
        field.nextElementSibling.innerHTML = "Your passwords don't match";
        event.preventDefault();
    } else {
        field.nextElementSibling.innerHTML = "";
    }
}

function validateForm(e) {
    firstNameValidation(firstName, e);
    lastNameValidation(lastName, e);
    phoneNumberValidation(phoneNumber, e)
    emailValidation(email,e)
    passwordValidation(password,e)
    confirmPasswordValidation(confirmPassword,e)
}
submitForm.addEventListener("submit", validateForm);

