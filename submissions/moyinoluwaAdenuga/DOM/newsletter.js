const footerEmail = document.querySelector('.footer-email'),
    regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
    error = document.querySelector('.footer-fill').lastElementChild,
    footerBtn = document.querySelector('.footer-btn');
    console.dir(error);

const validateNewsletter = (e) => {
    if (footerEmail.value === '') {
        error.innerHTML = 'Please enter your email address';
        e.preventDefault();
        return false;
    } else if (!footerEmail.value.match(regexEmail)) {
        error.innerHTML = 'Please enter a valid email';
        e.preventDefault();
        return false;
    } else {
        footerEmail.lastElementSibling.textContent = '';
        return true;
    }
}


footerBtn.addEventListener('click', validateNewsletter);