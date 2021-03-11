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