let submitForm = document.querySelector('.newsletterForm'),
    newsletter = document.getElementById('newsletter')
;

function newsletterValidation (event) {
    let newsletterRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,6})+$/;
    if (newsletter.value === '') {
        newsletter.nextElementSibling.innerHTML = "Please enter your Email Address";
        event.preventDefault();
    } else if (!newsletter.value.match(newsletterRegex)) {
        newsletter.nextElementSibling.innerHTML = "Please enter a valid mail";
        event.preventDefault();
    } else {
        newsletter.innerHTML = "";
    }
}

submitForm.addEventListener("submit", newsletterValidation);
