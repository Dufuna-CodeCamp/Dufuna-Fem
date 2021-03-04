const domElements = {
    fullName: document.getElementById('fullname'),
    email: document.getElementById('email2'),
    subject: document.getElementById('subject'),
    message: document.getElementById('message'),
    form: document.getElementById('form2')
};

const reg = {
    text: /^[A-Za-z ]+$/,
    email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
};

const required = (field, e, message) => {
    if (field.value === '') {
        field.nextElementSibling.innerHTML = message;
        e.preventDefault();
        return false;
    } else {
        field.nextElementSibling.innerHTML = "";
        return true;
    }
};

const nameValidation = (e) => {
    if (!domElements.fullName.value.match(reg.text)) {
        domElements.fullName.nextElementSibling.innerHTML = "This field cannot contain numbers and special characters";
        e.preventDefault();
        return false;
    } else {
        domElements.fullName.nextElementSibling.innerHTML = "";
        return true;
    }
};

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

const validateForm = (e) => {
    required(domElements.fullName, e, "Please enter your name");
    required(domElements.email, e, "Please enter your Email Address");
    required(domElements.subject, e, "Please enter a message subject");
    required(domElements.message, e, "Please enter your Message");
    nameValidation(e);
    emailValidation(e);

    return true;
};

domElements.form.addEventListener('submit', validateForm);