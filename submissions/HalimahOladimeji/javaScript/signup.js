let submitForm = document.getElementById('validateForm');
let firstName = document.getElementById('firstName');
let lastName = document.getElementById('lastName');
let otherName = document.getElementById('otherName');
let phoneNumber = document.getElementById('phoneNumber');
let emailAddress = document.getElementById('emailAddress');
let password = document.getElementById('password');
let confirmPassword = document.getElementById('confirmPassword');

function required(field, event) {
    if(field.value == '') {
        field.nextElementSibling.innerHTML = "This field is required";
        event.preventDefault();
        return false
    }
    field.nextElementSibling.innerHTML = "";
    return true;
}

function firstNameFieldValidation(event) {
    let regex = /^[A-Za-z ]+$/;
    if (!firstName.value.match(regex)) {
        firstName.nextElementSibling.innerHTML = "Your First Name should include only letters.";
        event.preventDefault();

        if (firstName.value == '')
            firstName.nextElementSibling.innerHTML = "Please enter your First Name";
        event.preventDefault();
    }

    else {
        firstName.nextElementSibling.innerHTML = "";
        return true;
    }
}

function lastNameFieldValidation(event) {
    let regex = /^[A-Za-z ]+$/;
    if (!lastName.value.match(regex)) {
        lastName.nextElementSibling.innerHTML = "Your Last Name should include only letters.";
        event.preventDefault();

        if (lastName.value == '')
            lastName.nextElementSibling.innerHTML = "Please enter your Last Name";
        event.preventDefault();
    }

    else {
        lastName.nextElementSibling.innerHTML = "";
        return true;
    }
}

function phoneNumberFieldValidation(event) {
    let phoneRegex = /^\+?([0-9])/;
    if (!phoneNumber.value.match(phoneRegex)) {
        phoneNumber.nextElementSibling.innerHTML = "Please enter a valid phone number";
        event.preventDefault();

        if (phoneNumber.value == '')
            phoneNumber.nextElementSibling.innerHTML = "Please enter your Phone Number";
        event.preventDefault();
    }

    else {
        phoneNumber.nextElementSibling.innerHTML = "";
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

function passwordValidation(event) {
    let pwdRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
    if (!password.value.match(pwdRegex)) {
        password.nextElementSibling.innerHTML = "Your password should have a minimum of 6 characters, 1 capital letter, 1 special character eg @ and 1 number.";
        event.preventDefault();

        if (!(password.value == ''))
            password.nextElementSibling.innerHTML = "Please enter your Password";
        event.preventDefault();
    }

    else {
        password.nextElementSibling.innerHTML = "";
        return true;
    }
}

function confirmPasswordValidation(event) {
    let confirmPassword = password;
    if (!confirmPassword.value.match(password.value)) {
        confirmPassword.nextElementSibling.innerHTML = "Your passwords don't match.";
        event.preventDefault();

        if (!(confirmPassword.value == ''))
            confirmPassword.nextElementSibling.innerHTML = "Please confirm your Password";
        event.preventDefault();
    }

    else {
        confirmPassword.nextElementSibling.innerHTML = "";
        return true;
    }
}

function validateForm(e) {
    required(firstName, e);
    required(lastName, e);
    required(phoneNumber, e);
    required(emailAddress, e);
    required(password, e);
    required(confirmPassword, e);
    firstNameFieldValidation(e)
    lastNameFieldValidation(e);
    phoneNumberFieldValidation(e);
    emailFieldValidation(e);
    passwordValidation(e);
    confirmPasswordValidation(e);

    return true;
}

submitForm.addEventListener("submit", validateForm);