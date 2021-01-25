let submitForm = document.getElementById('validateForm');
let fullName = document.getElementById('fullName');
let emailAddress = document.getElementById('emailAddress');
let subject = document.getElementById('subject');
let message = document.getElementById('message');

const Regex = /^[A-Za-z0-9 ]+$/,
emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
textareaRegex = /^[a-zA-Z]/;

function validation(field, regExp, errormessage1, errormessage2, event) {
    if (field.value === "") {
        field.nextElementSibling.innerHTML = errormessage1;
        event.preventDefault();
        return false;
    } else if (!field.value.match(regExp)) {
        field.nextElementSibling.innerHTML = errormessage2;
        event.preventDefault();
        return false;
    } else {
        field.nextElementSibling.innerHTML = "";
        return true;
    }
}

function contactValidation(event) {
	validation(
      fullName,
      Regex,
      "This field is required",
      "Please enter your Full Name",
      event
    );
    validation(
      emailAddress,
      emailRegex,
      "Please enter your Email Address",
      "Please enter a valid Email",
      event
    );
    validation(
      subject,
      textareaRegex,
      "This field is required",
      "Please enter a Message Subject",
      event
    );
    validation(
      message,
      textareaRegex,
      "This field is required",
      "Please enter your Message",
      event
    );
        return true;
  }

submitForm.addEventListener("submit", contactValidation);
