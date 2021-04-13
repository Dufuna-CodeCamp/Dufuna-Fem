let newsletterRequest = document.getElementById('newsletterform');
let footersEmail = document.getElementById('footersemail');

function newsletterCheck(event){
    let emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,10})+$/;

    if (footersEmail.value == '') {
        footersEmail.nextElementSibling.innerHTML = 'please enter your email address';
        event.preventDefault();
        return false;
    } else if (!footersEmail.value.match(emailRegex)){
        footersEmail.nextElementSibling.innerHTML = 'please enter a valid email';
        event.preventDefault();
        return false;
    } else {
        footersEmail.nextElementSibling.innerHTML = "";
        return true;
    }
}

function newsletterValidation (e){
    newsletterCheck (e);
    return true;
}

newsletterRequest.addEventListener('submit', newsletterValidation);

