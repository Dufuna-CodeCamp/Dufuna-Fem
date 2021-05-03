const domElements2 = {
    footerForm: document.querySelector('.footer-form'),
    footerEmail: document.getElementById('footer-email'),
    errorBlock: document.querySelector('.error-block2')
}

const validateNewsletter = (e) => {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})$/;
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

domElements2.footerForm.addEventListener('click', validateNewsletter);