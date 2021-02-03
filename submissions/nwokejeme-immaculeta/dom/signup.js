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
    } else if (!field.value.match(regEx)) {
        field.nextElementSibling.innerHTML = output;
        event.preventDefault();
        return false;
    } else {
        field.nextElementSibling.innerHTML = "";
        return true;
    }
}

let passwordValidation = (
    password,
    passwordRegex,
    'Please enter your password',
    'Your password should have a minimum of 6 characters, 1 capital letter, 1 special character eg @ and 1 number',
    event
  );

    if (!(confirmPassword.value == password.value)){
        confirmPassword.nextElementSibling.innerHTML = confirmPasswordUnmatched;
        event.preventDefault();
        return false;
    }else{
        confirmPassword.nextElementSibling.innerHTML = '';
        return true;
    } 
 
formValidation =(event) => {
    const nameRegex = /^[a-zA-Z]/,
      phoneRegex = /^[\+]?[0-9]{8,14}$/i,
      emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,10})+$/,
      passwordRegex = /(?=.*\d)(?=.*[a-z])(?=.*[a-zA-Z]).{6,}$/;
      
    validate(field, event, regEx, result, output, "Please enter your First Name", "Please enter a valid First Name");
    validate(field, event, regEx, result, output, "Please enter your Last Name", "Please enter a valid Last Name");
    validate(field, event, regEx, result, output, "Please enter your Phone Number", "Please enter a valid Phone Number");
    validate(field, event, regEx, result, output, "Please enter your Email", "Please enter a valid Email");
    validate(field, event, regEx, result, output, "Please enter your password", "Your password should have a minimum of 6 characters, 1 capital letter, 1 special character eg @ and 1 number");
    validate(field, event, regEx, result, output,"Please confirm your password", "Your passwords do not match")  
    return true;  

}  

submitForm.addEventListener("submit", validateForm);
