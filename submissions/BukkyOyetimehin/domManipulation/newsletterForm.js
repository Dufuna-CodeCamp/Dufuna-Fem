const newsletterForm = document.getElementById('validateNewsletter');
const footermail = document.getElementById('footerEmail');
const footerEmailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Checking the Email Field Content
function signupemailValidation(event) {
    if (footerEmail.value === "") {
        footerEmail.nextElementSibling.innerHTML = "Please enter your Email Address";
        event.preventDefault();
        return false;
    } else if (!footerEmail.value.match(footerEmailRegex)) {
        footerEmail.nextElementSibling.innerHTML = "Please enter a valid Email Address";
        event.preventDefault();
        return false;
    } else {
        footerEmail.nextElementSibling.innerHTML = "";
        return true;
    }
}
//Email Field Validation
function validateNewsletter(e) {
    signupemailValidation(e);
    return true;
}
newsletterForm.addEventListener("submit", validateNewsletter);