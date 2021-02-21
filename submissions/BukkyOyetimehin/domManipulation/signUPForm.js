const signupForm = document.getElementById('validateForm'),
    firstName = document.getElementById('fname'),
    lastName = document.getElementById('lname'),
    otherNames = document.getElementById('onames'),
    phoneNumber = document.getElementById('phone'),
    emailAddress = document.getElementById('email'),
    password = document.getElementById('pwd'),
    confirmPassword = document.getElementById('cpwd'),
    firstNameRegex = /^[A-Za-z]+$/,
    lastNameRegex = /^[A-Za-z]+$/,
    otherNamesRegex = /^[A-Za-z]+$/,
    phoneNumberRegex = /^\+(?:[0-9] ?){6,14}[0-9]$/,
    emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
    pwdRegex = "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{6,})",
    cpwdRegex = "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{6,})";

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

function validateForm(event) {
    required(firstName, firstNameRegex, "Please enter your First Name", "Please input alphabet characters only", event);
    required(lastName, lastNameRegex,
        "Please enter you Last Name", "Please input alphabet characters only", event);
    required(otherNames, otherNamesRegex,
        null, "Please input alphabet characters only", event);

    required(phoneNumber, phoneNumberRegex, "Please enter your Phone Number", "Please enter a valid phone number", event);
    required(email, emailRegex, "Please enter your Email Address", "Please enter a valid email", event);
    required(password, pwdRegex, "Please enter your Password", "Please password should have a minimum of 6 characters with at least 1 capital letter, 1 special character eg @", event);
    required(confirmPassword, cpwdRegex, "Please confirm your Password", "Password do not match", event);
    return true;
}
signupForm.addEventListener("submit", validateForm);