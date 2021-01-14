let contactForm = document.getElementById('contactForm');
let  fullName = document.getElementById('fullName');
let  contactEmail = document.getElementById('email');
let  subject = document.getElementById('subject');
let textArea = document.getElementById('msg');

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
    field.nextElementSibling.textContent = error;
    event.preventDefault();
    return false;
  } else {
    field.nextElementSibling.textContent = '';
    return true;
  }
}

contactFormValidation = (event) => {
  const emailRegex = /^\w+([-]?\w+)*@\w+([-]?\w+)*(\w{2,10})+$/,
    nameRegex = /^[a-zA-Z]/;
  required(subject, 'Please enter a Message Subject', event);
  required(textArea, 'Please enter your Message', event);

  contactValidation(
    fullName,
    nameRegex,
    'Please enter your Name',
    'Please enter a valid name',
    event
  );
  contactValidation(
    contactEmail,
    emailRegex,
    'Please enter your Email Address',
    'Please enter a valid email',
    event
  );
  return true;
}

contactForm.addEventListener('submit', contactFormValidation);
