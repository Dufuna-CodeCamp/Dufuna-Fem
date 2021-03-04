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

function fieldValidation(field, regex, error1, error2, event) {
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

function confirmPasswordValidation(event) {
    if (confirmPassword.value == '') {
        confirmPassword.nextElementSibling.innerHTML = "Please confirm your Password";
        event.preventDefault;
    } else if (!(password.value == confirmPassword.value)) {
        confirmPassword.nextElementSibling.innerHTML = "Your passwords don't match";
        event.preventDefault();
        return false;
    } else {
        confirmPassword.nextElementSibling.innerHTML = "";
        return true;
    }
}
function validateForm(e) {
    fieldValidation(firstName, nameRegex, "Please enter your First Name", "Please enter only letters",  e);
    fieldValidation(lastName, nameRegex, "Please enter your Last Name", "Please enter only letters", e);
    fieldValidation(phoneNumber, phoneNumberRegex, "Please enter your Phone Number", "Please enter a valid phone number", e);
    fieldValidation(emailAddress, emailAddressRegex, "Please enter your Email Address", "Please enter a valid email", e);
    fieldValidation(password, passwordRegex, "Please enter your Password", "Your password should have a minimum of 6 characters, 1 capital letter,1 special character eg @ and 1 number.", e);
    confirmPasswordValidation(e);
    return true;
}

submitForm.addEventListener("submit", validateForm);
