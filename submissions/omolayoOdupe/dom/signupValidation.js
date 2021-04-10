let form = document.getElementById('form');
let firstName = document.getElementById('firstname');
let middleName = document.getElementById('middlename');
let lastName = document.getElementById('lastname');
let phoneNo = document.getElementById('phonenumber');
let email = document.getElementById('email');
let password = document.getElementById('password');
let confirmPassword = document.getElementById('password2');

function inputCheck (field, regExp, error_block1, error_block2, event){
    if (field.value == ''){
        field.nextElementSibling.innerHTML = error_block1;
        event.preventDefault();
        return false;
    } else if (!field.value.match(regExp)){
        field.nextElementSibling.innerHTML = error_block2;
        event.preventDefault();
        return false;
    } else {
        field.nextElementSibling.innerHTML = '';
        return true;
    }
}

function passwordMatchCheck (event){
    if (confirmPassword.value == '') {
    confirmPassword.nextElementSibling.innerHTML = "Please confirm your password";
    event.preventDefault();
    return false;
    } else if (confirmPassword.value != password.value)  {
        confirmPassword.nextElementSibling.innerHTML = 'your password do not match';
        event.preventDefault();   
        return false; 
    } else  {
        confirmPassword.nextElementSibling.innerHTML = "";
        return true;
    }        
}

function inputValidation (event){
    let nameRegex = /^[A-Za-z]+$/;
    let numberRegex = /^[\+]?[0-9]{8,14}$/;
    let emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,10})+$/;
    let pwdRegex = /(?=.*\d)(?=.*[a-z])(?=.*[a-zA-Z]).{6,}$/;
    inputCheck (firstName, nameRegex, 'please enter your first name', 'please enter a valid first name', event);
    inputCheck (lastName, nameRegex, 'please enter your last name', 'please enter a valid last name', event);
    inputCheck (phoneNo, numberRegex, 'please enter your phone number', 'please enter a valid phone number', event);
    inputCheck (email, emailRegex, 'please enter your email address', 'please enter a valid email address', event);
    inputCheck (password, pwdRegex, 'please enter your password', 'password should have a minimum of 6 characters, 1 capital letter, 1 special character eg @ and 1 number', event);
    passwordMatchCheck(event); 
    return true;     
}

form.addEventListener('submit', inputValidation);


