let formValidation = document.getElementById('form');
     fName = document.getElementById("fullName");
     email = document.getElementById("mail");
     subject = document.getElementById("subject");
     message = document.getElementById("message");

    function nameValidation (event) {
        if (fName.value == '') {
            fName.nextElementSibling.innerHTML = "Please enter your firstname";
            event.preventDefault()
            return false;
        } 
        let nameRegex = /^[A-Za-z]+$/;
        if (!fName.value.match(nameRegex)) {
            fName.nextElementSibling.innerHTML = "Special characters are not allowed";
            event.preventDefault();
            return false ;
        } else {
            fName.nextElementSibling.innerHTML = "";
            return true;
        }
    }

    function emailValidation (event) {
        if (email.value == '') {
            email.nextElementSibling.innerHTML = "Please enter your email Address";
            event.preventDefault()
            return false;
        }   
        let emailRegex = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/;
         if (!email.value.match(emailRegex)) {
         email.nextElementSibling.innerHTML = "Please enter a valid email";
         event.preventDefault();
         return false;
         } else  {
         email.nextElementSibling.innerHTML = "";
         return true;
     }
     } 
     
     function subjectValidation (event) {
        if (subject.value == '') {
        subject.nextElementSibling.innerHTML = "Please enter a message subject";
        event.preventDefault();
        return false;
      } 
      if (subject.nextElementSibling.innerHTML = "");
        return true;
     }

     function messageValidation (event) {
        if (message.value == '') {
        message.nextElementSibling.innerHTML = "Please enter your Message";
        event.preventDefault()
        return false;
    } 
    if (message.nextElementSibling.innerHTML = "");
        return true;
}
    
     function validateForm(e) {
         nameValidation(e);
         emailValidation(e);
         subjectValidation(e);
         messageValidation(e);
         return true;
    }
     formValidation.addEventListener("submit", validateForm);