let newsletterForm = document.getElementById('newsletter');
let email = document.getElementById('email');
const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
function footerEmailValidation(event) {
    if (email.value === "") {
        email.nextElementSibling.innerHTML = "Please enter your Email Address";
        event.preventDefault();
        return false;
    } else if (!(email.value.match(emailRegex))) {
        email.nextElementSibling.innerHTML = "Please enter a valid email";
        event.preventDefault();
        return false;
    } else {
        email.nextElementSibling.innerHTML = "";
        return true;
    }
}

newsletterForm.addEventListener("submit", footerEmailValidation);