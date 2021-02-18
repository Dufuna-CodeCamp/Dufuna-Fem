let signUpForm = document.querySelector('.signUp'),
    firstname = document.getElementById('firstname'),
    lastName = document.getElementById('lastname'),
    lastName = document.getElementById('othername'),
    email = document.getElementById('email'),
    phoneNumber = document.getElementById('number'),
    password = document.getElementById('password'),
    confirmPassword = document.getElementById('confirm-password')
;

function required (field, event) {
    if(field.value == "") {
        field.nextElementSibling.innerHTML = "This field is mandatory.";
        event.preventDefault();
        return false;
    } else {
        field.nextElementSibling.innerHTML = "";
        return true;
    }
}

function signUp(e) {
    required(email,e);
    required(firstname,e);
    required(lastName,e);
}
signUpForm.addEventListener("submit", signUp)