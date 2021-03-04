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