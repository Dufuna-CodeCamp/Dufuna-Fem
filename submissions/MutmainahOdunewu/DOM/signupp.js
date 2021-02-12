let form = document.getElementById("btn");
let firstName = document.getElementById("firstName");
let lastName = document.getElementById("lastName");
let otherName = document.getElementById("otherName");
let phoneNumber = document.getElementById("phoneNumber");
let emailAddress = document.getElementById("emailAddress");
let password = document.getElementById("password");
let confirmPassword = document.getElementById("confirmPassword");

let validate = (field, event, regEx, result, output) => {
  if (field.value === "") {
    field.nextElementSibling.nextElementSibling.innerHTML = result;
    event.preventDefault();
    return false;
  } else if (!field.value.match(regEx)) {
    field.nextElementSibling.nextElementSibling.innerHTML = output;
    event.preventDefault();
    return false;
  } else {
    field.nextElementSibling.nextElementSibling.innerHTML = "";
    return true;
  }
};

let passwordValidation = (confirmPassword, password, event) => {
  if (!(confirmPassword.value == password.value)) {
    confirmPassword.nextElementSibling.nextElementSibling.innerHTML = confirmPasswordUnmatched;
    event.preventDefault();
    return false;
  } else {
    confirmPassword.nextElementSibling.nextElementSibling.innerHTML = "";
    return true;
  }
};

const formValidation = (event) => {
  const nameRegex = /^[a-zA-Z]/;
  const phoneRegex = /^[+]?[0-9]{8,14}$/i;
  const emailAddressRegex = /^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,10})+$/;
  const passwordRegex = /(?=.*d)(?=.*[a-z])(?=.*[a-zA-Z]).{6,}$/;

  validate(
    firstName,
    event,
    nameRegex,
    "Please enter your First Name",
    "Please enter a valid First Name"
  );
  validate(
    lastName,
    event,
    nameRegex,
    "Please enter your Last Name",
    "Please enter a valid Last Name"
  );
  validate(
    phoneNumber,
    event,
    phoneRegex,
    "Please enter your Phone Number",
    "Please enter a valid Phone Number"
  );
  validate(
    emailAddress,
    event,
    emailAddressRegex,
    "Please enter your Email",
    "Please enter a valid Email"
  );
  validate(
    password,
    event,
    passwordRegex,
    "Please enter your password",
    "Your password should have a minimum of 6 characters, 1 capital letter, 1 special character eg @ and 1 number"
  );
  validate(
    confirmPassword,
    event,
    passwordRegex,
    "Please confirm your Password",
    "Your password do not match"
  );
  return true;
};
form.addEventListener("click", formValidation);
