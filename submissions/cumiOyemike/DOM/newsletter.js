const domElements2 = {
    footerBtn: document.querySelector('.footer-btn'),
    footerEmail: document.getElementById('footer-email'),
    errorBlock: document.querySelector('.error-block2')
}

const validateNewsletter = (e) => {
    let reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (domElements2.footerEmail.value === '') {
        domElements2.errorBlock.innerHTML = "Please enter your email address";
        e.preventDefault();
        return false;
    } else if (!reg.test(domElements2.footerEmail.value.trim()) ) {
        domElements2.errorBlock.innerHTML = "Please enter a valid email";
        e.preventDefault();
        return false;
    } else {
        domElements2.errorBlock.innerHTML = "";
        return true;
    }
}

domElements2.footerBtn.addEventListener('click', validateNewsletter);


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