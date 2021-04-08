let submitForm = document.getElementById('form');
let firstName = document.getElementById('firstname');
let middleName = document.getElementById('middlename');
let lastName = document.getElementById('lastname');
let phoneNo = document.getElementById('phonenumber');
let email = document.getElementById('email');
let password = document.getElementById('password');
let confirmPassword = document.getElementById('password2');

function inputCheck (field, event){
    if (field.value == ''){
        field.nextElementSibling.innerHTML == 'error-block1';
        event.preventDefault();
        return false;
    } else if (!field.value.match(regExp)){
        field.nextElementSibling.innerHTML == 'error-block2';
        event.preventDefault();
        return false;
    } else if (!(field.value.lenght <= 6)){
        field.nextElementSibling.innerHTML == 'error-block3';
        event.preventDefault();
        return false;
    } else if (field.value != field.value){
        field.nextElementSibling.innerHTML == 'error-block4';
        event.preventDefault();
        return false;
    } else {
        field.nextElementSibling.innerHTML == '';
        return true;
    }
}

function inputValidation (event){
    let nameRegex = /^[A-Za-z]+$/;
    let numberRegex = /^[\+]?[0-9]{8,14}$/;
    let emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,10})+$/;
    let pwdRegex = /(?=.*\d)(?=.*[a-z])(?=.*[a-zA-Z]).{6,}$/;
    
    if (firstName.value ==''){
        firstName.nextElementSibling.innerHTML = 'please enter your first name';
        event.preventDefault();

    if (lastName.value == '')
        lastName.nextElementSibling.innerHTML = "Please enter your Last Name";
        event.preventDefault();

    if (phoneNo.value == '')
        phoneNo.nextElementSibling.innerHTML = "Please enter your phone number";
        event.preventDefault();

    if (email.value == '')
        email.nextElementSibling.innerHTML = "Please enter your email address";
        event.preventDefault();

    if (password.value == '')
        password.nextElementSibling.innerHTML = "Please enter your password";
        event.preventDefault();

    if (confirmPassword.value == '')
        confirmPassword.nextElementSibling.innerHTML = "Please confirm your password";
        event.preventDefault();
        return false;
        
    } else if (!firstName.value.match(nameRegex)){
        firstName.nextElementSibling.innerHTML = 'please enter a valid first name';
        event.preventDefault();

        (!lastName.value.match(nameRegex))
        lastName.nextElementSibling.innerHTML = 'please enter a valid last name';
        event.preventDefault();

        (!phoneNo.value.match(numberRegex))
        phoneNo.nextElementSibling.innerHTML = 'please enter a valid phone number';
        event.preventDefault();

        (!email.value.match(emailRegex))
        email.nextElementSibling.innerHTML = 'please enter a valid email address';
        event.preventDefault();

        (!password.value.match(pwdRegex))
        password.nextElementSibling.innerHTML = 'your password should have a minimum 6 character, 1 capital letter, 1 special character e.g @ and 1 number';
        event.preventDefault();
        return false;

    } else if (!(password.value.lenght <= 6)){
        password.nextElementSibling.innerHTML = 'password lenght must be minimum of 6 character';
        event.preventDefault();
        return false;

    } else if (confirmPassword.value != password.value){
        confirmPassword.nextElementSibling.innerHTML = 'password do not match';
        event.preventDefault();
        return false;

    } else {
        field.nextElementSibling.innerHTML = '';
        return true;
    }

}

submitForm.addEventListener('submit', inputValidation);


