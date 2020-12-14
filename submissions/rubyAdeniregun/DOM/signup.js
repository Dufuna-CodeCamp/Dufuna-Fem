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

        if (email.value == '')
            email.nextElementSibling.innerHTML = "Please enter your Email Address";
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

function validateForm(e){
    required(firstName, e);
    required(lastName, e);
    required(phoneNumber, e);
    required(email, e);
    required(password, e);
    required(confirmPassword, e);
    return true;  
}

submitForm.addEventListener("submit", validateForm);