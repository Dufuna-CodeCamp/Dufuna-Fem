let submitForm = document.getElementById('validateForm');
let firstName = document.getElementById('firstName');
let lastName = document.getElementById('lastName');
let phoneNumber = document.getElementById('phoneNumber');
let emailAddress = document.getElementById('email');
let password = document.getElementById('password');
let confirmPassword = document.getElementById('confirmPassword');
const nameRegex = /^[A-Za-z]+$/;
const phoneNumberRegex = /^[\+]?[0-9]{8,14}$/i;
const emailAddressRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*(_|[^\w])).+$/;

function required(field, regex, error1, error2, event) {
    if (field.value == ''){
        field.nextElementSibling.innerHTML = error1;
        event.preventDefault();
    } else if (!field.value.match(regex)) {
        field.nextElementSibling.innerHTML = error2;
        event.preventDefault();
        return false;
    }
    else {
        field.nextElementSibling.innerHTML = "";
        return true;
    }
}

function validateForm(e) {
    required(firstName, nameRegex, "Please enter your First Name", "Please enter only letters",  e);
    required(lastName, nameRegex, "Please enter your Last Name", "Please enter only letters", e);
    required(phoneNumber, phoneNumberRegex, "Please enter your Phone Number", "Please enter a valid phone number", e);
    required(emailAddress, emailAddressRegex, "Please enter your Email Address", "Please enter a valid email", e);
    required(password, passwordRegex, "Please enter your Password", "Your password should have a minimum of 6 characters, 1 capital letter,1 special character eg @ and 1 number.", e);
    required(confirmPassword, passwordRegex, "Please confirm your Password", "Your passwords don't match", e);
    return true;
}

submitForm.addEventListener("submit", validateForm);
