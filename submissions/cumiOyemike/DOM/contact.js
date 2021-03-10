let submitForm = document.getElementById('form2'),
    email = document.getElementById('email'),
    fullName = document.getElementById('fullname'),
    subject = document.getElementById('subject'),
    message = document.getElementById('comments');

function required(field, event, message) {
    if (field.value === '') {
        field.nextElementSibling.innerHTML = message;
        event.preventDefault();
        return false;
    } else {
        field.nextElementSibling.innerHTML = "";
        return true;
    }
}

function emailFieldValidation(event) {
    let emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (email.value === '') {
        email.nextElementSibling.innerHTML = "Please enter your email address";
        event.preventDefault();
        return false;
    }
    else if (!email.value.match(emailRegex)) {
        email.nextElementSibling.innerHTML = "Please enter a valid email";
        event.preventDefault();
        return false
    } else {
        email.nextElementSibling.innerHTML = "";
        return true;
    }
}

function nameValidation(event) {
    let nameRegex = /^[A-Za-z ]+$/;
    if (fullName.value === '') {
        fullName.nextElementSibling.innerHTML = "Please enter your name";
        event.preventDefault();
        return false;
    } else if (!fullName.value.match(nameRegex)) {
        fullName.nextElementSibling.innerHTML = "Name cannot contain special characters"
        event.preventDefault();
        return false;
    } else {
        fullName.nextElementSibling.innerHTML = "";
        return true;
    }
}



function contactForm(e) {
    emailFieldValidation(e);
    nameValidation(e);
    required(subject, e,"Please enter a message subject");
    required(message, e, "Please enter your message");
    
    return true;
}

submitForm.addEventListener("submit", contactForm);
