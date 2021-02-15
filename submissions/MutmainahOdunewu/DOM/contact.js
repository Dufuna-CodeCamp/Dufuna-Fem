let form = document.getElementById("btn");
let fullName = document.getElementById("fullName");
let email = document.getElementById("emailAddress");
let subject = document.getElementById("subject");
let message = document.getElementById("comments");

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
let messageValidation = (field, event, result) => {
  if (field.value === "") {
    field.nextElementSibling.nextElementSibling.innerHTML = result;
    event.preventDefault();
    return false;
  } else {
    field.nextElementSibling.nextElementSibling.innerHTML = "";
    return true;
  }
};

const Validation = (event) => {
  nameRegex = /^[a-zA-Z]/;
  const emailAddressRegex = /^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,10})+$/;

  validate(fullName, event, nameRegex, "Please enter your Name");

  validate(
    emailAddress,
    event,
    emailAddressRegex,
    "Please enter your Email",
    "Please enter a valid Email"
  );
  messageValidation(subject, event, "Please enter a message Subject");
  messageValidation(comments, event, "Please enter your Message");
};
form.addEventListener("click", Validation);
