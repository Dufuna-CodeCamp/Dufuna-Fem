let newsLetterSubmit = document.querySelector('#newsletter');
let newsLetterEmail = document.getElementById('newsletter-email')
let emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

function newsLetterValidation(event) {
    if(newsLetterEmail.value == '') {
        newsLetterEmail.nextElementSibling.innerHTML = "Please enter your Email Address";
        event.preventDefault();
    } else if(!newsLetterEmail.value.match(emailRegex)) {
        newsLetterEmail.nextElementSibling.innerHTML = "Please enter a valid email";
        event.preventDefault();
        return false;
    } else {
        newsLetterEmail.nextElementSibling.innerHTML = "";
        return true;
    }
}

newsLetterSubmit.addEventListener("submit", newsLetterValidation);