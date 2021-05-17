const domElements = {
  form: document.getElementById('form'),
  firstname: document.getElementById('first-name'),
  lastname: document.getElementById('last-name'),
  othername: document.getElementById('other-name'),
  tel: document.getElementById('phone-number'),
  email: document.getElementById('email'),
  password: document.getElementById('password'),
  password2: document.getElementById('password2'),
};

const reg = {
  text: /^[a-zA-Z]/,
  tel: /^[\+]?[0-9]{8,14}$/i,
  email: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})$/,
  password: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{6,}$/gm
}

const required = (field, e, message) => {
  if(field.value === '') {
      field.nextElementSibling.innerHTML = message;
      e.preventDefault();
      return false;
  } else {
      field.nextElementSibling.innerHTML = "";
      return true;
  }
};

const fieldValidations = (field, e, regex, message) => {
  if (!field.value.match(regex)) {
      field.nextElementSibling.innerHTML = message;
      e.preventDefault;
      return false;
  } else {
      field.nextElementSibling.innerHTML = "";
      return true;
  }
}


const emailValidation = (e) => {
  if (reg.email.test(domElements.email.value.trim())) {
      domElements.email.nextElementSibling.innerHTML = "";
      return true;
  } else {
      domElements.email.nextElementSibling.innerHTML = "Please enter a valid email";
      e.preventDefault();
      return false;
  }
};


const passwordMatch = (e) => {
  if (domElements.password2.value != domElements.password.value) {
    domElements.password2.nextElementSibling.innerHTML = "Your passwords don't match";
    e.preventDefault();
    return false;
} else {
    domElements.password2.nextElementSibling.innerHTML = "";
    return true;
  }
}

const validateForm = (e) => {
  required(domElements.firstname, e, "Please enter your First Name");
  required(domElements.lastname, e, "Please enter your Last Name");
  required(domElements.tel, e, "Please enter your Phone Number");
  required(domElements.email, e, "Please enter your Email Address");
  required(domElements.password, e, "Please enter your Password");
  required(domElements.password2, e, "Please confirm your Password");
  fieldValidations(domElements.firstname, e, reg.text,"Please enter a valid First Name");
  fieldValidations(domElements.lastname, e, reg.text,"Please enter a valid Last Name");
  emailValidation(e);
  fieldValidations(domElements.tel, e, reg.tel, "Please enter a valid phone number");
  fieldValidations(domElements.password, e, reg.password, "Your password should have a minimum of 6 characters, 1 capital letter, 1 special character eg @ and 1 number");
  passwordMatch(e);


  return true;
}

domElements.form.addEventListener('submit', validateForm);