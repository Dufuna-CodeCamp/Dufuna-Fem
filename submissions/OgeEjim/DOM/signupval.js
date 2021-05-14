let submitSign = document.getElementById('validateSignup');
let firsName = document.getElementById('firstName');
let lastName = document.getElementById('lastName');
let email = document.getElementById('email');
let number = document.getElementById('number');
let password = document.getElementById('password');

function signup(field,event) {
    if (field.value == '') {
        firstName.nextElementSibling.innerHTML = "Please enter your First Name";
        lastName.nextElementSibling.innerHTML = "Please enter your Last Name";
        number.nextElementSibling.innerHTML = "Please enter your Phone Number";
        email.nextElementSibling.innerHTML = "Please enter your Email Address";
        password.nextElementSibling.innerHTML = "Please enter your Password";
        event.preventDefault();
        return false; 
    } else{
        field.nextElementSibling.innerHTML = '';
        return true;
    }
}


function validateSignup(e) {
        signup(firstname, e);
        signup(lastname, e);
        signup(email, e);
        signup(number, e);   
        signup(password, e);
        return true;
}

submitSign.addEventListener("submit",validateSignup);
