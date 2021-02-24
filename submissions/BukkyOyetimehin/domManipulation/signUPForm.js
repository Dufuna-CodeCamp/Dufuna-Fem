const signupForm = document.getElementById('validateForm');
const firstName = document.getElementById('fname');
const lastName = document.getElementById('lname');
const otherNames = document.getElementById('onames');
const phoneNumber = document.getElementById('phone');
const email = document.getElementById('email');
const password = document.getElementById('pwd');
const confirmPassword = document.getElementById('cpwd');
const firstNameRegex = /^[A-Za-z]+$/;
const lastNameRegex = /^[A-Za-z]+$/;
const otherNamesRegex = /^[A-Za-z]+$/;
const phoneNumberRegex = /^\+(?:[0-9] ?){6,14}[0-9]$/;
const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const pwdRegex = /^(?:(?<Numbers>[0-9]{1})|(?<Alpha>[a-zA-Z]{1})|(?<Special>[^a-zA-Z0-9]{1})){6,50}$/


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

function checkcpwd(field, sec_error, mismatch, event) {
    if (cpwd.value === "") {
        field.nextElementSibling.innerHTML = sec_error
        event.preventDefault();
        return false;
    }
    if (cpwd.value !== password.value) {
        field.nextElementSibling.innerHTML = mismatch;
        event.preventDefault();
        return false;
    } else {
        field.nextElementSibling.innerHTML = "";
        return true;
    }

}
//Validating the Form
function validateForm(event) {
    required(fname, firstNameRegex, "Please enter your First Name", "Please input alphabet characters only", event);
    required(lname, lastNameRegex,
        "Please enter you Last Name", "Please input alphabet characters only", event);
    required(onames, otherNamesRegex,
        "Please enter your Othername", "Please input alphabet characters only", event);

    required(phone, phoneNumberRegex, "Please enter your Phone Number", "Please enter a valid phone number", event);
    required(email, emailRegex, "Please enter your Email Address", "Please enter a valid email", event);
    required(pwd, pwdRegex, "Please enter your Password", "Please password should have a minimum of 6 characters with at least 1 capital letter, 1 special character eg @", event);
    checkcpwd(cpwd, "Please confirm your Password", "Passwords do not match", event)
    return true;
}



signupForm.addEventListener("submit", validateForm);