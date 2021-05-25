let submitSign = document.getElementById('validateSignup');
let firstName = document.getElementById('firstName');
let lastName = document.getElementById('lastName');
let email = document.getElementById('email');
let number = document.getElementById('number');
let address = document.getElementById('address');
let password = document.getElementById('password');
let confirmPassword = document.getElementById('confirmPassword');


function valFirst(firstName,event) {
    let fnRegex = /^[a-zA-Z]+$/;
    if (firstName.value == '') {
        firstName.nextElementSibling.innerHTML = "Please enter your First Name";
        event.preventDefault();
        return false;
    }else if  (!firstName.value.match(fnRegex))  {
        firstName.nextElementSibling.innerHTML = "No special characters allowed";
        event.preventDefault();
        return false;
    } else {
        firstName.nextElementSibling.innerHTML = "";
           return true; 
    } 
}


function valLast(lastName,event) {
    let fnRegex = /^[a-zA-Z]+$/;
    if (lastName.value == '') {
        lastName.nextElementSibling.innerHTML = "Please enter your Last Name";
        event.preventDefault();
        return false;
    } else if (!lastName.value.match(fnRegex)) {
        lastName.nextElementSibling.innerHTML = "No special characters allowed";
        event.preventDefault();
        return false;
    } else {
        lastName.nextElementSibling.innerHTML = "";
           return true; 
    } 
}


function valnumber(number,event) {   
    let numberRegex = /^[0-9.+]+$/; 
    if (number.value == '') {
        number.nextElementSibling.innerHTML = "Please enter your Phone Number";
        event.preventDefault();
        return false;
    } else if (!(number.value.match(numberRegex))) {
        number.nextElementSibling.innerHTML = "Please enter a valid Phone Number";
        event.preventDefault();
        return false;
    }else {
        number.nextElementSibling.innerHTML = "";
           return true;
    }
}
    
            
function valMail(email,event) {
    let emailRegex =/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (email.value == '') {
        email.nextElementSibling.innerHTML = "Please enter your Email Address";
        event.preventDefault();
        return false;
    } else if (!(email.value.match(emailRegex))) {
        email.nextElementSibling.innerHTML = "Please enter a valid Email Address";
        event.preventDefault();
        return false;
    } else {
     email.nextElementSibling.innerHTML = "";
        return true;
    }
}

function valAddy(address,event) {
    if (address.value == '') {
        address.nextElementSibling.innerHTML = "Please enter your Address";
        event.preventDefault();
        return false;
    } else {
        address.nextElementSibling.innerHTML = "";
           return true;
       }
   } 

function valPassword(password,event) { 
    let passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{6,})*$/;
    if (password.value == '') {
        password.nextElementSibling.innerHTML = "Please enter your Password";
        event.preventDefault();
        return false;
    }else if (!(password.value.match(passwordRegex))) { 
        password.nextElementSibling.innerHTML = "Your password should have a minimum of 6 characters, 1 capital letter, 1 special character and 1 number.";
        event.preventDefault();
        return false;
    }else {
        password.nextElementSibling.innerHTML = "";
        return true;
    }
}


function valCpassword(confirmPassword,event) {
    let password = confirmPassword
    if (confirmPassword.value == '') {
        confirmPassword.nextElementSibling.innerHTML = "Please confirm your Password";
        event.preventDefault();
        return false;
    } else if (password.value.match(confirmPassword)) {
        confirmPassword.nextElementSibling.innerHTML = "Your Passwords don't match";
    } else {
        confirmPassword.nextElementSibling.innerHTML = "";
           return true;
       }
   } 


function validateSignup(event) {
    valFirst(firstName,event)
    valLast(lastName,event)
    valMail(email, event)
    valnumber(number, event)
    valAddy(address, event)
    valPassword(password, event)
    valCpassword(confirmPassword, event)
return true;
}

submitSign.addEventListener("submit",validateSignup);

