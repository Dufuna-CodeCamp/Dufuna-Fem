let submitForm = document.getElementById('validateForm'),
    fullName = document.getElementById('fullName'),
    email = document.getElementById('email'),
    subject = document.getElementById('subject'),
    comments = document.getElementById('comments');

function required(field, event) {
    if (fullName.value == '') {
        fullName.nextElementSibling.innerHTML = "Please enter your Name";
        event.preventDefault();
    
    if (subject.value == '')
        subject.nextElementSibling.innerHTML = "Please enter a message subject";
        event.preventDefault();

    if (comments.value == '')
        comments.nextElementSibling.innerHTML = "Please enter your message";
        event.preventDefault();
        return false;
    
    }   else { 
        field.nextElementSibling.innerHTML = "";
        return true;
    }
}

function emailfieldvalidation(event) {
    let emailRegex =  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (!email.value.match(emailRegex)) {
        email.nextElementSibling.innerHTML = "please enter a valid email";
        event.preventDefault();

    if (email.value == '')
        email.nextElementSibling.innerHTML = "Please enter your Email Address";
        event.preventDefault();
        return false;
    }   
    
    else {
        email.nextElementSibling.innerHTML = "";
        return true;
    }
}

function nameValidation(event) {
    let lettersRegex =   /^[A-Za-z]+$/;;
    if (!fullName.value.match(lettersRegex)) {
        fullName.nextElementSibling.innerHTML = "Please enter your name";
        event.preventDefault();
    }

    else {
        fullName.nextElementSibling.innerHTML = "";
        return true;
    }

}

function validateForm(e){
    required(fullName, e);
    required(email, e);
    required(subject, e);
    required(comments, e);
    emailfieldvalidation(e);
    nameValidation(e);
    return true;  
}

submitForm.addEventListener("submit", validateForm);


//footer form validation
let submitForm1 = document.getElementById('verifyForm'),
    footerEmail = document.getElementById('footerEmail');

    function footeremailvalidation(event) {
        let emailRegex =  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;;
        if (!footerEmail.value.match(emailRegex)) {
            footerEmail.nextElementSibling.innerHTML = "Please enter a valid email";
            event.preventDefault();
    
        if (footerEmail.value == '')
            footerEmail.nextElementSibling.innerHTML = "Please enter your Email Address";
            event.preventDefault();
            return false;
        }   
        
        else {
            footerEmail.nextElementSibling.innerHTML = "";
            return true;
        }
    }

    function verifyForm(e) {
        footeremailvalidation(e);
        return true;  
    }
    
    submitForm1.addEventListener("submit", verifyForm);