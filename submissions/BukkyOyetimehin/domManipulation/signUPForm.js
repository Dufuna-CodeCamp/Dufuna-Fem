let signupForm = document.querySelector('#validateForm'),
    firstName = document.querySelector('#fname'),
    lastName = document.querySelector('#lname'),
    otherNames = document.querySelector('#onames'),
    phoneNumber = document.querySelector('#phone'),
    emailAddress = document.querySelector('#email'),
    password = document.querySelector('#pwd'),
    confirmPassword = document.querySelector('#cpwd'),
    checkbox = document.querySelector('#terms'),
    error = document.querySelector('.error-block');
//First of all, the form must be checked to make sure all the mandatory fields are filled in.
function required(field, event) {
    if (fname.value === '') {
        fname.nextElementSibling.innerHTML = "Please enter your First Name.";
        event.preventDefault();
        return false;
    }

    function required(field, event) {
        if (lname.value === '') {
            lname.nextElementSibling.innerHTML = "Please enter your Last Name.";
            event.preventDefault();
            return false;
        }
        if (phone.value === '') {
            phone.nextElementSibling.innerHTML = "Please enter your Phone Number.";
            event.preventDefault();
            return false;
        }
        if (email.value === '') {
            email.nextElementSibling.innerHTML = "Please enter your Email Address.";
            event.preventDefault();
            return false;
        }
        pwd.nextElementSibling.innerHTML = "Please enter your Password.";
        event.preventDefault();
        return false;
    }
    if (cpwd.value === '') {
        cpwd.nextElementSibling.innerHTML = "Please confirm your Password.";
        event.preventDefault();
        return false;
    } else {
        field.nextElementSibling.innerHTML = "";
        return true;
    }
}
//Validate Form
function validateForm(e) {
    required(firstName, e);
    required(lastName, e);
    required(phoneNumber, e);
    required(email, e);
    required(password, e);
    required(confirmPassword, e);
    firstNameFieldValidation(e);
    lastNameFieldValidation(e);
    otherNamesFieldValidation(e);
    phoneNumberFieldValidation(e);
    emailFieldValidation(e);
    passwordValidation(e);
    confirmPasswordValidation(e)
    return true;
}
signupForm.addEventListener("submit", validateForm);
//Secondly, the data that is entered must be checked for correct form and value.
//Validate First Name
function firstNameFieldValidation(event) {
    let firstNameRegex = /^[A-Za-z]+$/;
    if (!fname.value.match(firstNameRegex)) {
        fname.nextElementSibling.innerHTML = "Please input alphabet characters only";
        event.preventDefault();
        return false;
    } else {
        fname.nextElementSibling.innerHTML = "";
        return true;
    }
}
//Validate Last Name
function lastNameFieldValidation(event) {
    let lastNameRegex = /^[A-Za-z]+$/;
    if (!lname.value.match(lastNameRegex)) {
        lname.nextElementSibling.innerHTML = "Please input alphabet characters only";
        event.preventDefault();
        return false;
    } else {
        lname.nextElementSibling.innerHTML = "";
        return true;
    }
}
//Validate Other Names
function otherNamesFieldValidation(event) {
    let otherNamesRegex = /^[A-Za-z]+$/;
    if (!onames.value.match(otherNamesRegex)) {
        onames.nextElementSibling.innerHTML = "Please input alphabet characters only";
        event.preventDefault();
        return false;
    } else {
        onames.nextElementSibling.innerHTML = "";
        return true;
    }
}
//Validate Phone Number
function phoneNumberFieldValidation(event) {
    let phoneNumberRegex = /^\d{10}$/;
    if (!phone.value.match(phoneNumberRegex)) {
        phone.nextElementSibling.innerHTML = "Please enter a valid phone number";
        event.preventDefault();
        return false;
    } else {
        phone.nextElementSibling.innerHTML = "";
        return true;
    }
}
//Validate Email
function emailFieldValidation(event) {
    let emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (!email.value.match(emailRegex)) {
        email.nextElementSibling.innerHTML = "Please enter a valid email";
        event.preventDefault();
        return false;
    } else {
        email.nextElementSibling.innerHTML = "";
        return true;
    }
}
//Validate Password Field
function passwordValidation(event) {
    let pwdRegex = ("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{6,})");
    if (!pwd.value.match(pwdRegex)) {
        pwd.nextElementSibling.innerHTML = "Please password should have a minimum of 1 capital letter, 1 special character eg @ and 1 number.";
        event.preventDefault();
        return false;
    } else if (!(pwd.value.length >= 6)) {
        pwd.nextElementSibling.innerHTML = "Your password should have a minimum of 6 characters.";
        event.preventDefault();
        return false;
    } else {
        pwd.nextElementSibling.innerHTML = "";
        return true;
    }
}
//Validate Confirm Password Field
function confirmPasswordValidation(event) {
    if (cpwd.value !== pwd.value) {
        cpwd.nextElementSibling.innerHTML = "Your passwords don't match";
        event.preventDefault();
        return false;
    } else {
        cpwd.nextElementSibling.innerHTML = "";
        return true;
    }
}