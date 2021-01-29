let formValidation = document.getElementById('form');
     fName = document.getElementById("fullName");
     email = document.getElementById("mail");
     subject = document.getElementById("subject");
     message = document.getElementById("message");
     nameRegex = /^[A-Za-z]+$/;
     emailRegex = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/;

     function emptyField( fieldName, errorMessage, event) {
         if (fieldName.value == '') {
            fieldName.nextElementSibling.innerHTML = errorMessage;
            event.preventDefault();
            return false
        } else {
            fieldName.nextElementSibling.innerHTML = "";
            return true;
        }
    }
    function regex (fieldName, Regex,errorMessage, event) {
        if (!fieldName.value.match(Regex)) {
            fieldName.nextElementSibling.innerHTML = errorMessage
            event.preventDefault();
            return false;
        } else {
            fieldName.nextElementSibling.innerHTML = "";
            return true;
        }
    }

    function forms (e) {
    emptyField(fName, "Please enter your first name", e)
    emptyField(email,"Please enter your email address", e)
    emptyField(subject, "Please enter a message subject", e)
    emptyField(message, "Please enter your message", e)
    }

    function form (e) {
        regex(fName, nameRegex, "Special characters are not allowed", e)
        regex(email, emailRegex, "Please enter a valid email")
    }
    
    formValidation.addEventListener("submit", forms)
    formValidation.addEventListener("submit", form)
    
    
    