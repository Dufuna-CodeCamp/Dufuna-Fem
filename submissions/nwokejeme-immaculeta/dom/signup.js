let submitForm = document.getElementById('validateForm'),
    firstName = document.getElementById('firstName'),
    lastName = document.getElementById('lastName'),
    otherName = document.getElementById('otherName'),
    phoneNumber = document.getElementById('phoneNumber'),
    email = document.getElementById('email');
    password = document.getElementById('password');
    confirmPassword = document.getElementById('confirmPassword');

    let validate = (field, event, regEx, result, output) => {
        if (field.value === "") {
            field.nextElementSibling.innerHTML = result;
            event.preventDefault();
            return false;
        } else
        if (!field.value.match(regEx)) {
            field.nextElementSibling.innerHTML = output;
            event.preventDefault();
            return false;
        } else {
            field.nextElementSibling.innerHTML = "";
            return true;
        }
    }

    let passwordValidation = (password1, password2, event) => {
        const passwordRegex = /(?=.*\d)(?=.*[a-z])(?=.*[a-zA-Z]).{6,}$/;
    
        if ((password1.value && password2.value) === "") {
            password1.nextElementSibling.innerHTML = "Please enter your password";
            password2.nextElementSibling.innerHTML = "Please confirm your password";
            event.preventDefault();
            return false;
        } else if ((!password1.value.match(passwordRegex)) && (!password2.value.match(passwordRegex))) {
            password1.nextElementSibling.innerHTML = "Your password should have a minimum of 6 characters, 1 capital letter, 1 special character eg @ and 1 number";
            password2.nextElementSibling.innerHTML = "Your password should have a minimum of 6 characters, 1 capital letter, 1 special character eg @ and 1 number";
            event.preventDefault();
            return false;
    
        } else if (password.value !== password2.value) {
            password1.nextElementSibling.innerHTML = "Password don't match!";
            password2.nextElementSibling.innerHTML = "Password don't match!";
            event.preventDefault();
            return false;
        } else {
            password1.nextElementSibling.innerHTML = "";
            password2.nextElementSibling.innerHTML = "";
            return true;
        }
    }
    
    
    let validateForm = (event) => {
        const nameRegex = /^[a-zA-Z]/,
            phoneRegex = /^[\+]?[0-9]{8,14}$/i,
            emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,10})+$/;
    
        validate(firstName, event, nameRegex, "Please enter your First Name", "Please enter a valid First Name");
        validate(lastName, event, nameRegex, "Please enter your Last Name", "Please enter a valid Last Name");
        validate(phoneNumber, event, phoneRegex, "Please enter your Phone Number", "Please enter a valid Phone Number");
        validate(email, event, emailRegex, "Please enter your Email", "Please enter a valid Email");
        passwordValidation(password, confirmPassword, event)
    
        return true;
    }
    submitForm.addEventListener("submit", validateForm)