let form = document.getElementById('form');
let fullName = document.getElementById('fullname');
let email = document.getElementById('email');
let subject = document.getElementById('subject');
let textMessage = document.getElementById('comment');

function contactInputCheck (field, regExp, error_block1, error_block2, event){
    if (field.value == ''){
        field.nextElementSibling.innerHTML = error_block1;
        event.preventDefault();
        return false;
    } else if (!field.value.match(regExp)){
        field.nextElementSibling.innerHTML = error_block2;
        event.preventDefault();
        return false;
    } else {
        field.nextElementSibling.innerHTML = '';
        return true;
    }
}

function mandatory (field, error, event){
    if (field.value == '') {
        field.nextElementSibling.innerHTML = error;
        event.preventDefault();
        return false;
    } else  {
        field.nextElementSibling.innerHTML = "";
        return true;
    }  
}      

function contactInputValidation(event){
    let nameRegex = /^[A-Za-z]+$/;
    let emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,10})+$/;
    contactInputCheck (fullName, nameRegex, 'please enter your name', 'please enter a valid name', event);
    contactInputCheck (email, emailRegex, 'please enter your email address', 'please enter a valid email', event);
    mandatory (subject, 'please enter a message subject', event);
    mandatory (textMessage, 'please enter your message', event);
    return true;     
}

form.addEventListener ('submit', contactInputValidation);