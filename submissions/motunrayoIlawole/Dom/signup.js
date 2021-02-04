const domElements = {
    form: document.getElementById('form'),
    submitBtn: document.querySelector('.btn-signup'),
    fname: document.getElementById('first-name'),
    lname: document.getElementById('last-name'),
    oname: document.getElementById('other-name'),
    tel: document.getElementById('phone-number'),
    email: document.getElementById('email'),
    password: document.getElementById('password'),
    password2: document.getElementById('password2'),
    check: document.getElementById('terms')
};

const reg = {
    text: /^[A-Za-z ]+$/,
    tel: /^\+?\d*$/,
    email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/
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
    if (!(domElements.password === domElements.password2)) {
        domElements.password2.nextElementSibling.innerHTML = "Your passwords don't match";
        e.preventDefault();
        return false;
    } else {
        domElements.password2.nextElementSibling.innerHTML = "";
        return true;
    }
}

const validateForm = (e) => {
    required(domElements.fname, e, "Please enter your First Name");
    required(domElements.lname, e, "Please enter your Last Name");
    required(domElements.tel, e, "Please enter your Phone Number");
    required(domElements.email, e, "Please enter your Email Address");
    required(domElements.password, e, "Please enter your Password");
    required(domElements.password2, e, "Please confirm your Password");
    fieldValidations(domElements.fname, e, reg.text, "This field cannot contain numbers and special characters");
    fieldValidations(domElements.lname, e, reg.text, "This field cannot contain numbers and special characters");
    emailValidation(e);
    fieldValidations(domElements.tel, e, reg.tel, "Please enter a valid phone number");
    fieldValidations(domElements.password, e, reg.password, "Your password should have a minimum of 6 characters, 1 capital letter, 1 special character eg @ and 1 number");
    passwordMatch(e);


    return true;
}

domElements.form.addEventListener('submit', validateForm);