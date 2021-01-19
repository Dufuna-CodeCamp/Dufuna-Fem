let form = document.getElementById("sign");
     firstname = document.getElementById("firstname");
     lastname = document.getElementById("lastname");
     othername = document.getElementById("othername");
     phonenumber = document.getElementById("phonenumber");
     mail  = document.getElementById("mail");
     password = document.getElementById("password");
     password2 = document.getElementById("password2");

     function required (field, event) {
        if (firstname.value == "") {
            firstname.nextElementSibling.innerHTML = "Please enter your firstname";
            event.preventDefault();

        if (lastname.value == "") 
                lastname.nextElementSibling.innerHTML = "Please enter your lastname";
                event.preventDefault();

        if (phonenumber.value == "") 
                phonenumber.nextElementSibling.innerHTML = "Please enter your phonenumber";
                event.preventDefault();
         if (mail.value == "") 
                mail.nextElementSibling.innerHTML = "Please enter your Email Address";
                event.preventDefault();
        if (password.value == "") 
                password.nextElementSibling.innerHTML = "Please enter your password";
                event.preventDefault();
         if (password2.value == "") 
                password2.nextElementSibling.innerHTML = "Please confirm your password";
                event.preventDefault();
                return false;
        } else {
            field.nextElementSibling.innerHTML = "";
            return true;
        }   
    }
// NAME VALIDATION
function nameValidation (event) {
let nameRegex = /^[A-Za-z]+$/;
    if (!firstname.value.match(nameRegex)) {
        firstname.nextElementSibling.innerHTML = "Special characters are not allowed";
        event.preventDefault();
    if (!lastname.value.match(nameRegex)) {
            lastname.nextElementSibling.innerHTML = "Special characters are not allowed";
            event.preventDefault();
    } else {
        firstname.nextElementSibling.innerHTML = "";
        lastname.nextElementSibling.innerHTML = "";
        return true;
    }
}
}

//  Phone Number Validation
 function numberValidation(event) {
     let numRegex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3} )[-. ]?([0-9]{4})$/;
     if (!phonenumber.value.match(numRegex)) {
         phonenumber.nextElementSibling.innerHTML = "Please enter a valid Number";
         event.preventDefault();
         return false
         
     } else {
         phonenumber.nextElementSibling.innerHTML = "";
         return true;
     } 
     }

     //  Email field Validation
     function emailFieldValidation(event) {
         let emailRegex = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/;
         if (!mail.value.match(emailRegex)) {
         mail.nextElementSibling.innerHTML = "Please enter a valid email";
         event.preventDefault();
         return false

         } else  {
         mail.nextElementSibling.innerHTML = "";
         return true;
     }
     } 

     // PasswordValidation
function passwordValidation(event) {
    let pwdRegex = /^(?=.*?[A-Z])(?=(.*[a-z]){1,})(?=(.*[\d]){1,})(?=(.*[\W]){1,})(?!.*\s).{8,}$/;
    if (!password.value.match(pwdRegex)) {
        password.nextElementSibling.innerHTML = "Your password should have a minimum of 6 characters, 1 capital letter, 1 special character eg @ and 1 number";
        event.preventDefault();
        return false;
      
    }  
        else if (!(password.value.length >= 6)) {
        password.nextElementSibling.innerHTML = "Your password length must have a minimum of 6 characters";
        event.preventDefault();
        return false;

    } 
        else {
        password.nextElementSibling.innerHTML = "";
        return true;
    }
}
 // Confirm password
function password2Validation(event) {
    if (password2 !== password) {
        password2.nextElementSibling.innerHTML = "Your passwords don't match"
        event.preventDefault();
        return false;
    } else {
        password2.nextElementSibling.innerHTML = "";
        return true;
    }
}

    function forms(e) {
        required (firstname, e);
        required (lastname, e);
        required (phonenumber, e);
        required (mail, e);
        required (password, e);
        required (password2, e);
        emailFieldValidation(e);
        nameValidation(e);
        numberValidation(e);
        passwordValidation(e);
        password2Validation(e);
        return true;
    }
 form.addEventListener("submit", forms);