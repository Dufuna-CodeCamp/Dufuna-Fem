let form = document.getElementById("contact-form"), 
    fullName = document.getElementById('contact-fullname'),
    email = document.getElementById('contact-email'),
    subject = document.getElementById('msg-shift'),
    message = document.getElementById('message'),
    regText = /^[A-Za-z]+$/,
    regEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

const fieldValidation = (field, e, message1, message2, regex) => {
    if (field.value === "") {
        field.nextElementSibling.textContent = message1;
        e.preventDefault();
        return false;
    } else if (!field.value.match(regex)) {
        field.nextElementSibling.textContent = message2;
        e.preventDefault();
        return false;
    } else {
        return true;
    }
}

const required = (field, e, message) => {
    if (field.value === "") {
        field.nextElementSibling.textContent = message;
        e.preventDefault();
        return false;
    } else {
        return true;
    }
}

function validateForm(e) {
    fieldValidation(fullName, e,'Please enter your Name', 'Special characters are not allowed', regText);
    fieldValidation(email, e, 'Please enter your Email Address', 'Please enter a valid email', regEmail);
    required(subject, e, 'Please enter a message subject');
    required(message, e, 'Please enter your Message');
    return true;
}

form.addEventListener('submit', validateForm);