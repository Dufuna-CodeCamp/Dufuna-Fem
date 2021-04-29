const form = document.getElementById('form2');
const fullname = document.getElementById('fullname');
const email = document.getElementById('email2');
const subject = document.getElementById('subject');
const message = document.getElementById('message');


fieldValidation = (field, regEx, error1, error2, e) => {
    if (field.value === '') {
        field.nextElementSibling.textContent = error1;
        e.preventDefault();
        return false;
    } else if (!field.value.match(regEx)) {
        field.nextElementSibling.textContent = error2;
        e.preventDefault();
        return false;
    } else {
        field.nextElementSibling.textContent = '';
        return true;
    }
}
  
required = (field, error, e) => {
    if (field.value == '') {
        field.nextElementSibling.innerHTML = error;
        e.preventDefault();
        return false;
    } else {
        field.nextElementSibling.innerHTML = '';
        return true;
    }
}
  
formValidation = (e) => {
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})$/;
    const nameRegex = /^[a-zA-Z]/;
    required(email, 'Please enter your Email Address', e);
    required(subject, 'Please enter a Message Subject', e);
    required(message, 'Please enter your Message', e);
  
    fieldValidation(
        fullname, nameRegex, 'Please enter your Name', 
        'Please enter a valid name', e
    );
    fieldValidation(
        email, emailRegex, 'Please enter your Email Address',
      'Please enter a valid email', e
    );
    return true;
}
  
form.addEventListener('submit', formValidation);