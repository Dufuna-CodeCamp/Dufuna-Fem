let formValidation = document.getElementById('form');
     fName = document.getElementById("fullName");
     email = document.getElementById("mail");
     subject = document.getElementById("subject");
     message = document.getElementById("message");
     nameRegex = /^[A-Za-z]+$/;
     emailRegex = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/;

     function emptyField(event) {
         if (subject.value == '') {
            subject.nextElementSibling.innerHTML = "Please enter a message subject";
            event.preventDefault();
           
          } 
          if (email.value == '') {
            email.nextElementSibling.innerHTML = "Please enter your email Address";
            event.preventDefault()
           
        }   
            if (message.value == '') {
            message.nextElementSibling.innerHTML = "Please enter your Message";
            event.preventDefault()
            return false;
        } else {
            field.nextElementSibling.innerHTML = "";
            return true;
        }
    }
     function nameValidation (event) {
        if (!fName.value.match(nameRegex)) {
            fName.nextElementSibling.innerHTML = "Special characters are not allowed";
            event.preventDefault()
        }
         if (!email.value.match(emailRegex)) {
            email.nextElementSibling.innerHTML = "Please enter a valid email";
            event.preventDefault()
            return false;
        } else {
            field.nextElementSibling.innerHTML = "";
            return true;
        }
    }

     formValidation.addEventListener("submit", nameValidation);
     formValidation.addEventListener("submit", emptyField);