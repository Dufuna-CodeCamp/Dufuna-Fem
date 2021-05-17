let newsletterRequest = document.getElementById('newsletterform');
let footersEmail = document.getElementById('footersemail');

function newsletterCheck(event){
    let emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,10})+$/;

    if (email.value == '') {
        newsletterRequest.lastElementChild.innerHTML = 'please enter your email address';
        event.preventDefault();
        return false;
    } else if (!email.value.match(emailRegex)){
        newsletterRequest.lastElementChild.innerHTML = 'please enter a valid email';
        event.preventDefault();
        return false;
    } else {
        newsletterRequest.lastElementChild.innerHTML = "";
        return true;
    }
}

function newsletterValidation (e){
    newsletterCheck (e);
    return true;
}

newsletterRequest.addEventListener('submit', newsletterValidation);

