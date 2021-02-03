const form = document.getElementById('footerForm');
const email = document.getElementById('newsletterEmail');
const emailRegex =  /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})$/;


function newsletterValidation(event) {
    
    if (email.value == '') {
        email.nextElementSibling.innerHTML = "Please enter your Email Address";
        event.preventDefault();
        return false;
    }
    if (!email.value.match(emailRegex)) {
        email.nextElementSibling.innerHTML = "Please enter a valid email";
        event.preventDefault();    
        return false;
    }   else {
        email.nextElementSibling.innerHTML = "";
        return true;
    }
}

form.addEventListener('submit', newsletterValidation);
