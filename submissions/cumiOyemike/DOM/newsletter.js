const newsletterDom = {
    footerBtn: document.querySelector('.footer-btn'),
    footerEmail: document.getElementById('footer-email'),
    errorBlock: document.querySelector('.error-block2')
}

const validateNewsletter = (e) => {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (newsletterDom.footerEmail.value === '') {
        newsletterDom.errorBlock.innerHTML = "Please enter your email address";
        e.preventDefault();
        return false;
    } else if (!reg.test(newsletterDom.footerEmail.value.trim()) ) {
        newsletterDom.errorBlock.innerHTML = "Please enter a valid email";
        e.preventDefault();
        return false;
    } else {
        newsletterDom.errorBlock.innerHTML = "";
        return true;
    }
}

newsletterDom.footerBtn.addEventListener('click', validateNewsletter);


/*let footerEmail = document.getElementById('footer-email'),
    footerBtn = document.getElementById('footer-btn');
    

function emailFieldValidation(event) {
    let emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (footerEmail.value === '') {
        footerEmail.nextElementSibling.innerHTML = "Please enter your email address";
        event.preventDefault();
        return false;
    }
    else if (!footerEmail.value.match(emailRegex)) {
        footerEmail.nextElementSibling.innerHTML = "Please enter a valid email";
        event.preventDefault();
        return false
    } else {
        footerEmail.nextElementSibling.innerHTML = "";
        return true;
    }
}

function validateNewsletter(e) {
    emailFieldValidation(e);

    return true;
}

footerBtn.addEventListener("submit", validateNewsletter);
*/