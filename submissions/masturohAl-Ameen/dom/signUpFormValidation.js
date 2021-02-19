let signUpForm = document.querySelector('.information'),
    firstname = document.getElementById('firstname'),
    lastName = document.getElementById('lastname'),
    email = document.getElementById('email'),
    phoneNumber = document.getElementById('number'),
    password = document.getElementById('password'),
    confirmPassword = document.getElementById('confirm-password')
;

function nameValidation(name, event, innerHTML) {
    let nameRegex = /^[a-z]+$/i;
    if(name.value === '') {
        name.nextElementSibling.innerHTML = "This field is required";
        event.preventDefault();
        return false;
    } else if(!name.value.match(nameRegex)) {
        name.nextElementSibling.innerHTML = innerHTML;
        event.preventDefault();
        return false;
    } else {
        name.nextElementSibling.innerHTML = "";
        return true;
    }
} 

function fieldValidation(event, field, fieldRegex, innerHTML, innerHTMLTwo) {
    if(field.value === '') {
        field.nextElementSibling.innerHTML = innerHTML;
        event.preventDefault();
    } else if (!field.value.match(fieldRegex)) {
        field.nextElementSibling.innerHTML = innerHTMLTwo;
        event.preventDefault();
        return false;
    } else {
        field.nextElementSibling.innerHTML = "";
        return true;
    }
}

function confirmPasswordValidation(event) {
    if (confirmPassword.value.length === 0)  {
        confirmPassword.nextElementSibling.innerHTML = "Please confirm your Password";
        event.preventDefault();
    } else if ((password.value && password.value) !== confirmPassword.value) {
        confirmPassword.nextElementSibling.innerHTML = "Your password don't match";
        event.preventDefault();
        return false;
    } else {
        confirmPassword.nextElementSibling.innerHTML = "";
        return true;
    }
}

function information(e) {
    const phoneNumberRegex = /^[\+]?[0-9]{10,14}$/i;
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,6})+$/;
    const pwdRegex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[._$,/;:+=~`'"<>^#?!@$%^&*-]).{6,}$/;

    nameValidation(firstName, e, "Please enter your First name");
    nameValidation(lastName, e, "Please enter your Last name");
    fieldValidation(e, phoneNumber, phoneNumberRegex, "Please enter your phone number", "Please enter a valid phone number");
    fieldValidation(e, email, emailRegex, "Please enter your Email address", "Please enter a valid email");
    fieldValidation(e, password, pwdRegex, "Please enter your passwod", "Your password should have a minimum of 6 characters, 1 capital letter, 1 special character eg @ and 1 number");
    confirmPasswordValidation(e);
    return true;
}

signupForm.addEventListener("submit", information);
