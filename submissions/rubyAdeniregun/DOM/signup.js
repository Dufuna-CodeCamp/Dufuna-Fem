let submitForm = document.getElementById('validateForm'),
    firstName = document.getElementById('firstName'),
    lastName = document.getElementById('lastName'),
    phoneNumber = document.getElementById('phoneNumber'),
    email = document.getElementById('email');
    password = document.getElementById('password');
    confirmPassword = document.getElementById('confirmPassword');

function required(field, event) {
    if (firstName.value == '') {
            firstName.nextElementSibling.innerHTML = "Please enter your Full Name";
            event.preventDefault();
        
    if (lastName.value == '')
            lastName.nextElementSibling.innerHTML = "Please enter your Last Name";
            event.preventDefault();
    
    if (phoneNumber.value == '')
            phoneNumber.nextElementSibling.innerHTML = "Please enter your Phone Number";
            event.preventDefault();

    if (password.value == '')
            password.nextElementSibling.innerHTML = "Please enter your password";
            event.preventDefault();

    if (confirmPassword.value == '')
            confirmPassword.nextElementSibling.innerHTML = "Please confirm your password";
            event.preventDefault();
            return false;
        
    }   else { 
            field.nextElementSibling.innerHTML = "";
            return true;
    }
}

function nameValidation(event) {
    let lettersRegex =   /^[A-Za-z]+$/;;
        if (!firstName.value.match(lettersRegex)) {
            firstName.nextElementSibling.innerHTML = "Please enter your first name";
            event.preventDefault();

        if (!lastName.value.match(lettersRegex))
            lastName.nextElementSibling.innerHTML = "Please enter your last name";
            event.preventDefault();
    }
    
    else  {
            firstName.nextElementSibling.innerHTML = "";
            lastName.nextElementSibling.innerHTML = "";
            return true;
    }
    
}

function phoneValidation(event) {
    let phoneRegex =  /^\+?\d*$/;;
    if (!phoneNumber.value.match(phoneRegex)) {
        phoneNumber.nextElementSibling.innerHTML = "Please enter a valid Phone Number";
        event.preventDefault();
        return false;
    }    
    
    else {
        phoneNumber.nextElementSibling.innerHTML = "";
        return true;
    }

}

function emailfieldvalidation(event) {
    let emailRegex =  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (!email.value.match(emailRegex)) {
        email.nextElementSibling.innerHTML = "please enter a valid email";
        event.preventDefault();

    if (email.value == '')
    email.nextElementSibling.innerHTML = "Please enter your Email Address";
    event.preventDefault();

    }   
    
    else {
        email.nextElementSibling.innerHTML = "";
        return true;
    }
}

// password field validation
function passwordvalidation(event) {
    let pwdRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*(_|[^\w])).+$/;
    if (!password.value.match(pwdRegex)) {
    password.nextElementSibling.innerHTML = "Please password should contain at least 1 letter, 1number and 1special character";
    event.preventDefault();
    return false;
    }   
        else if (!(password.value.length >= 6))  {
        password.nextElementSibling.innerHTML = "Please length must be at least 6 characters";
        event.preventDefault();   
        return false;    
    }
        else  {
        password.nextElementSibling.innerHTML = "";
        return true;
    }
        
}

//confirm password field validation
function cwordvalidation(event) {
    let pwdRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*(_|[^\w])).+$/;
    if (!confirmPassword.value.match(pwdRegex)) {
    confirmPassword.nextElementSibling.innerHTML = "Please password should contain at least 1 letter, 1number and 1special character";
    event.preventDefault();
    return false;
    }   
        else if (!(confirmPassword.value.length >= 6))  {
        confirmPassword.nextElementSibling.innerHTML = "Please length must be at least 6 characters";
        event.preventDefault();   
        return false;    
    }
        else if (confirmPassword.value != password.value)  {
        confirmPassword.nextElementSibling.innerHTML = "do not match";
        event.preventDefault();   
        return false; 
    }
        else  {
        confirmPassword.nextElementSibling.innerHTML = "";
        return true;
    }
        
}


    
function validateForm(e){
    required(firstName, e);
    required(lastName, e);
    required(phoneNumber, e);
    required(email, e);
    required(password, e);
    required(confirmPassword, e);
    phoneValidation(e);
    cwordvalidation(e)
    nameValidation(e);
    emailfieldvalidation(e);
    passwordvalidation(e);
    return true;  
}

submitForm.addEventListener("submit", validateForm);