let submitForm = document.getElementById("validateForm"),
    fullName = document.getElementById("fullName"),
    email = document.getElementById("email"),
    subject = document.getElementById("subject"),
    description = document.getElementById("description");

let validate = (field, event, regEx, result, output) => {
    if (field.value === "") {
        field.nextElementSibling.innerHTML = result;
        event.preventDefault();
        return false;
    } else if (!field.value.match(regEx)) {
        field.nextElementSibling.innerHTML = output;
        event.preventDefault();
        return false;
    } else {
        field.nextElementSibling.innerHTML = "";
        return true;
    }
};

let messageValidation = (field, event, result) => {
    if (field.value === "") {
        field.nextElementSibling.innerHTML = result;
        event.preventDefault();
        return false;
    } else {
        field.nextElementSibling.innerHTML = "";
        return true;
    }
};

formValidation = (event) => {
    const nameRegex = /^[a-zA-Z]{4,}(?: [a-zA-Z]+){0,2}$/,
        emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,10})+$/;

    validate(fullName, event, nameRegex, "Please enter your Full Name",  "Please enter a valid Name");
    validate(email, event, emailRegex, "Please enter your Email", "Please enter a valid Email");
    messageValidation(subject, event, "Please enter a message Subject");
    messageValidation(description, event, "Please enter a Message");
}
submitForm.addEventListener("submit", formValidation);