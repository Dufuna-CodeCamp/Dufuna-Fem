let form = document.getElementById('form');
let  firstName = document.getElementById('firstName');
let  lastName = document.getElementById('lastName');
let  phoneNumber = document.getElementById('phoneNumber');
let  formEmail = document.getElementById('email');
let  password = document.getElementById('password');
let  confirmPassword = document.getElementById('confirmPassword');

validation = (field, regExp, error1, error2, event) => {
  event.preventDefault();
  if (field.value === '') {
    field.nextElementSibling.textContent = error1;
    event.preventDefault();
    return false;
  } else if (!field.value.match(regExp)) {
    field.nextElementSibling.textContent = error2;
    event.preventDefault();
    return false;
  } else {
    field.nextElementSibling.textContent = '';
    return true;
  }
}

formValidation =(event) => {
  const nameRegex = /^[a-zA-Z]/,
    phoneRegex = /^[\+]?[0-9]{8,14}$/i,
    emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,10})+$/,
    passwordRegex = /(?=.*\d)(?=.*[a-z])(?=.*[a-zA-Z]).{6,}$/;
  validation(
    firstName,
    nameRegex,
    'Please enter your First Name',
    'Please enter a valid First Name ',
    event
  );
  validation(
    lastName,
    nameRegex,
    'Please enter your Last Name',
    'Please enter a valid Last Name',
    event
  );
  validation(
    phoneNumber,
    phoneRegex,
    'Please enter your Phone Number',
    'Please enter a valid Phone Number',
    event
  );
  validation(
    formEmail,
    emailRegex,
    'Please enter your Email',
    'Please enter a valid Email',
    event
  );
  validation(
    password,
    passwordRegex,
    'Please enter your password',
    'Your password should have a minimum of 6 characters, 1 capital letter, 1 special character eg @ and 1 number',
    event
  );
  validation(
    confirmPassword,
    passwordRegex,
    'Please confirm your Password',
    'Your password do not match',
    event
  );
  return true;
}

form.addEventListener('submit', formValidation);