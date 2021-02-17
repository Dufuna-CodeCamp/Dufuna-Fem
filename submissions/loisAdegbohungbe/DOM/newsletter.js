let  newsForm = document.getElementById('newsletter-form');
let  newsEmail = document.getElementById('newsEmail');

validateForm = (event) => {
    let emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,10})+$/;
    if (newsEmail.value == '') {
        newsEmail.previousElementSibling.innerHTML = "Please enter your Email Address";
        event.preventDefault();
    }
    else if (!newsEmail.value.match(emailRegex)) {
        newsEmail.previousElementSibling.innerHTML = "please enter a valid email";
        event.preventDefault();
    }
    else {
        newsEmail.previousElementSibling.innerHTML = "";
        return true;
    }
}

newsForm.addEventListener('submit', validateForm)