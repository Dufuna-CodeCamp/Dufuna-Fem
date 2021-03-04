let submitForm = document.getElementById('submitNewsletter');
let emailRegex = /^\w+[\w-\.]*\@\w+((-\w+)|(\w*))\.[a-z]{2,3}$/;

validateForm = (e) => {
    if (email.value === '') {
        submitForm.lastElementChild.textContent = 'Please enter your Email Address';
        e.preventDefault();
        return false;
    }

    if (!email.value.match(emailRegex)) {
        submitForm.lastElementChild.textContent = 'Please enter a valid email';
        e.preventDefault();
        return false;
    } else {
        submitForm.lastElementChild.textContent = '';
        return true;
    }
}
submitForm.addEventListener('submit', validateForm);