const signUp = document.getElementById('form');
const firstname = document.getElementById('firstname');
const lastname = document.getElementById('lastname');
const signUpEmail = document.getElementById('email');
const number = document.getElementById('number');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

validation = (field, regEx, error1, error2, event) => {
    event.preventDefault();
    if (field.value === '') {
        field.nextElementSibling.innerHTML = error1;
        event.preventDefault();
        return false;
    } else if (!field.value.match(regEx)) {
        field.nextElementSibling.innerHTML = error2;
        event.preventDefault();
        return false;
    } else {
        field.nextElementSibling.innerHTML = '';
        return true;
    }
}

required = (input1, message1, message2, event) => {
    if (input1.value === '') {
        input1.nextElementSibling.innerHTML = message1;
        event.preventDefault();
        return false;
    } else if(input1.value !== password.value) {
        input1.nextElementSibling.innerHTML = message2;
        event.preventDefault();
        return false;
    } else {
        input1.nextElementSibling.innerHTML = '';
        return true;
    }
}

  
signUpValidation =(event) => {

    const nameRegex = /^[a-zA-Z]/;
    const phoneRegex = /^[\+]?[0-9]{8,14}$/i;
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})$/;
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{6,}$/gm;

    validation(firstname, nameRegex, 'Please enter your Firstname',
      'Please enter a valid Firstname ', event
    );
    validation(
        lastname, nameRegex, 'Please enter your Lastname',
        'Please enter a valid Lastname', event
    );
    validation(
        number, phoneRegex, 'Please enter your Phone Number',
        'Please enter a valid Phonenumber', event
    );
    validation(
        signUpEmail, emailRegex, 'Please enter your Email Address',
        'Please enter a valid Email', event
    );
    validation(
      password, passwordRegex, 'Please enter your password',
      'Your password should have a minimum of 6 characters, 1 capital letter, 1 special character eg @ and 1 number',
      event
    );
    required(
        password2, 'Please confirm your Password',
        'Your password do not match', event
    );
    
    return true;
  }
  
  signUp.addEventListener('submit', signUpValidation);