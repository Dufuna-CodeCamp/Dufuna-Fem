let contactForm = document.getElementById('contact-form');
let fullName = document.getElementById('fullName');
let email = document.getElementById('email');
let subject = document.getElementById('subject');
let message = document.getElementById('message');

validation = (field, regEx, error1, error2, event) => {
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

confirmRequiredInput = (field, error, event) => {
  if (field.value == '') {
    field.nextElementSibling.textContent = error;
    event.preventDefault();
    return false;
  } else {
    field.nextElementSibling.textContent = '';
    return true;
  }
}

contactFormValidation = (event) => {
  const nameRegex = /^[A-Za-z0-9 ]+$/,
        emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,10})+$/;
        
  confirmRequiredInput(
    subject, 
    'Please enter a Message Subject', 
    event
    );

  confirmRequiredInput(
      message, 
      'Please enter your Message', 
      event
    );

  validation(
    fullName,
    nameRegex,
    'Please enter your Name',
    'Please enter a valid name',
    event
  );

  validation(
    email,
    emailRegex,
    'Please enter your Email Address',
    'Please enter a valid email',
    event
  );
  return true;
}

contactForm.addEventListener('submit', contactFormValidation);
