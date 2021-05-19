let submitNewsletter = document.getElementById('valForm');
let mail = document.getElementById('mail');

function mailValidation(event) {
    let mailRegex =/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z]+)*$/;
    if (mail.value == "") {
        mail.nextElementSibling.innerHTML = "Please enter your Email Address";
        event.preventDefault();
        return false;
    } else if (!mail.value.match(emailRegex)) {
        mail.nextElementSibling.innerHTML = "Please enter a valid email";
        event.preventDefault();
        return false;
    } else {
        mail.nextElementSibling.innerHTML = '';
        return true;
    }
}

function valForm(e) {
    mailValidation(e);
}

submitNewsletter.addEventListener("submit",valForm);
