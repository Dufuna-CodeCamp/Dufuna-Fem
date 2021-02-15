let submitForm = document.getElementById('validateForm'),
    firstName = document.getElementById('firstname'),
    lastName = document.getElementById('lastname'),
    phoneNumber = document.getElementById('phonenumber'),
    email = document.getElementById('emailaddress'),
    password = document.getElementById('password'),
    password1 = document.getElementById('password1'),
    signUpBtn = document.getElementById('signup-btn'),
    tandc = document.getElementById('tandc'),
    tandcError = document.getElementById('tandcError'),
    regText = /^[A-Za-z]+$/,
    regPhone = /^\+?\d*$/,
    regEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
    regPwd = /^(?=.*?[A-Z])(?=(.*[a-z]){1,})(?=(.*[\d]){1,})(?=(.*[\W]){1,})(?!.*\s).{6,}$/;
    
    console.dir(tandc);
    

function required(field, event, regex, message1, message2) {
    if (field.value === '') {
        field.nextElementSibling.textContent = message1;
        event.preventDefault();
        return false;
    } else if (!field.value.match(regex)) {
        field.nextElementSibling.textContent = message2;
        event.preventDefault();
        return false;
    } else {
        field.nextElementSibling.textContent = '';
        return true;
    }
}

confirmPassword = (field2, field1, e, message1, message2) => {
    if (field2.value === '') {
        field2.nextElementSibling.textContent = message1;
        e.preventDefault();
        return false;
    } else if (field2.value !== field1.value) {
        field2.nextElementSibling.textContent = message2;
        e.preventDefault();
        return false;
    } else {
        field2.nextElementSibling.textContent = '';
        return true; 
    }
}

confirmCheckbox = (field, fieldError, e) => {
    if (field.checked === false ) {
        fieldError.textContent = 'Tick to submit form';
        e.preventDefault();
        return false;
    } else {
        fieldError.textContent = '';
        return true;
    }
}

function validateForm(e) {
    required(firstName, e, regText, 'Please enter your First Name', 'Special characters are not allowed');
    required(lastName, e, regText, 'Please enter your Last Name', 'Special characters are not allowed');
    required(phoneNumber, e, regPhone, 'Please enter your Phone Number', "Please enter a valid phone number");
    required(email, e, regEmail, 'Please enter your Email Address', 'Please enter a valid email');
    required(password, e, regPwd, 'Please enter your Password', 'Your password should have a minimum of 6 characters including 1 capital letter, special character, number');
    confirmPassword(password1, password, e, 'Please confirm your Password', 'Your passwords do not match');
    confirmCheckbox(tandc, tandcError, e);
    return true;
}

submitForm.addEventListener('submit', validateForm);




