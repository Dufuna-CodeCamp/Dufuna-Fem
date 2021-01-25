let formValidation = document.getElementById('form');
     fName = document.getElementById("fullName");
     email = document.getElementById("mail");
     subject = document.getElementById("subject");
     message = document.getElementById("message");
     nameRegex = /^[A-Za-z]+$/;
     emailRegex = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/;

    function emptyField (fieldName, errorMessage, event) {
        if (fieldName.value == '') {
            fieldName.nextElementSibling.innerHTML = errorMessage;
            event.preventDefault()
            return false
        } else {
            fieldName.nextElementSibling.innerHTML = "";
            return true;
        } 
    }
    function Regex (fieldName, Regex, errorMessage, event) {
        if (!fieldName.value.match(Regex)) {
            fieldName.nextElementSibling.innerHTML = errorMessage
            event.preventDefault();
            return false;
        } else fieldName.nextElementSibling.innerHTML = "";
        return true;
    }

    function forms(e) {
        emptyField(fName, "Please enter your firstname",e)
        emptyField(email,"Please enter your email address",e)
        emptyField(subject,"Please enter your Message", e)
        emptyField(message, "Please enter a message subject",e)
        Regex(fName, nameRegex, "Special characters are not allowed", e)
        Regex(email, emailRegex, "Please enter a valid email", e)
    }

    formValidation.addEventListener("submit", forms)

    //     }   if (subject.value == '') {
    //         subject.nextElementSibling.innerHTML = "Please enter a message subject";
    //         event.preventDefault();
           
    //       } 
    //       if (email.value == '') {
    //         email.nextElementSibling.innerHTML = "Please enter your email Address";
    //         event.preventDefault()
           
    //     }   
    //         if (message.value == '') {
    //         message.nextElementSibling.innerHTML = "Please enter your Message";
    //         event.preventDefault()
    //         return false;
    //     } else {
    //         field.nextElementSibling.innerHTML = "";
    //         return true;
    //     }
    // }
    //  function nameValidation (event) {
    //     if (!fName.value.match(nameRegex)) {
    //         fName.nextElementSibling.innerHTML = "Special characters are not allowed";
    //         event.preventDefault()
    //     }
    //      if (!email.value.match(emailRegex)) {
    //         email.nextElementSibling.innerHTML = "Please enter a valid email";
    //         event.preventDefault()
    //         return false;
    //     } else {
    //         field.nextElementSibling.innerHTML = "";
    //         return true;
    //     }
    // }

    //  formValidation.addEventListener("submit", nameValidation);
    //  formValidation.addEventListener("submit", emptyField);