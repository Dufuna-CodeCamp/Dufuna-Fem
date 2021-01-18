let formValidation = document.getElementById('form');
     fName = document.getElementById("fullName");
     email = document.getElementById("mail");
     subject = document.getElementById("subject");
     message = document.getElementById("message");

     function required (field, event) {
         if (field.value === '') {
             field.nextElementSibling.innerHTML ="This field is required";
             event.preventDefault();
             return false;
         } else {
             field.nextElementSibling.innerHTML = "";
             return true;
         }
     }
     function validateForm(e) {
         required(fName, e);
         required(email, e);
         required(subject, e);
         required(message, e);
         return true;
     }
     formValidation.addEventListener("submit", validateForm);