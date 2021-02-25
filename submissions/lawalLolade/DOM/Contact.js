const contactForm = document.getElementById('contactForm');
const fullname = document.getElementById('fullname');
const contactEmail = document.getElementById('email');
const subject = document.getElementById('subject');
const message = document.getElementById('message');


contactValidation = (field, regEx, error1, error2, event) => {
    if (field.value === '') {
        field.nextElementSibling.textContent = error1;
        event.preventDefault();
        return false;
    } else if (!field.value.match(regEx)) {
        field.nextElementSibling.textContent = error2;
        event.preventDefault();
        return false;
    } else {
        field.nextElementSibling.textContent = '';
        return true;
    }
}
  
required = (field, error, event) => {
    if (field.value == '') {
        field.nextElementSibling.innerHTML = error;
        event.preventDefault();
        return false;
    } else {
        field.nextElementSibling.innerHTML = '';
        return true;
    }
}
  
contactFormValidation = (event) => {
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})$/;
    const nameRegex = /^[a-zA-Z]/;
    required(subject, 'Please enter a Message Subject', event);
    required(message, 'Please enter your Message', event);
  
    contactValidation(
        fullname, nameRegex, 'Please enter your Name', 
        'Please enter a valid name', event
    );
    contactValidation(
        contactEmail, emailRegex, 'Please enter your Email Address',
      'Please enter a valid email', event
    );
    return true;
  }
  
  contactForm.addEventListener('submit', contactFormValidation);