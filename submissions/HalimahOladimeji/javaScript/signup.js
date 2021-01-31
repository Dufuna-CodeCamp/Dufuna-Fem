let form = document.getElementById('validateForm');
let firstName = document.getElementById('firstName');
let lastName = document.getElementById('lastName');
let otherName = document.getElementById('otherName');
let phoneNumber = document.getElementById('phoneNumber');
let emailAddress = document.getElementById('emailAddress');
let password = document.getElementById('password');
let confirmPassword = document.getElementById('confirmPassword');

const Regex = /^[A-Za-z ]+$/,
    phoneRegex = /^\+?([0-9])/,
    emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
    pwdRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;


function validation(field, regExp, errormessage1, errormessage2, event) {
    if (field.value === "") {
        field.nextElementSibling.innerHTML = errormessage1;
        event.preventDefault();
        return false;
    } else if (!field.value.match(regExp)) {
        field.nextElementSibling.innerHTML = errormessage2;
        event.preventDefault();
        return false;
    } else {
        field.nextElementSibling.innerHTML = "";
        return true;
    }
}

function formValidation(event) {
    validation(
        firstName,
        Regex,
        'Please enter your First Name',
        'Please enter a valid First Name ',
        event
    );
    validation(
        lastName,
        Regex,
        'Please enter your Last Name',
        'Please enter a valid Last Name',
        event
    );
    validation(
        phoneNumber,
        phoneRegex,
        'Please enter your Phone Number',
        'Please enter a valid Phone Number',
        event
    );
    validation(
        emailAddress,
        emailRegex,
        'Please enter your Email',
        'Please enter a valid Email',
        event
    );
    validation(
        password,
        pwdRegex,
        'Please enter your password',
        'Your password should have a minimum of 6 characters, 1 capital letter, 1 special character eg @ and 1 number',
        event
    );
    validation(
        confirmPassword,
        pwdRegex,
        'Please confirm your Password',
        'Your password do not match',
        event
    );
    return true;
}

form.addEventListener('submit', formValidation, false);