let newsForm = document.getElementById('newsletter-form');
let newsEmail = document.getElementById('newsletterEmail');

validateForm = (event) => {
    let emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,10})+$/;
    if (newsEmail.value == '') {
        newsForm.lastElementChild.innerHTML = "Please enter your Email Address";
        event.preventDefault();
    }
    else if (!newsEmail.value.match(emailRegex)) {
        newsForm.lastElementChild.innerHTML = "Please enter a valid email";
        event.preventDefault();
    }
    else {
        newsForm.lastElementChild.innerHTML = "";
        return true;
    }
}

newsForm.addEventListener('submit', validateForm)