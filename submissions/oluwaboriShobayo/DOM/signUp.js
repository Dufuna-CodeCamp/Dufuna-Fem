let form = document.getElementById("sign");
     firstname = document.getElementById("firstname");
     lastname = document.getElementById("lastname");
     othername = document.getElementById("othername");
     phonenumber = document.getElementById("phonenumber");
     mail  = document.getElementById("mail");
     password = document.getElementById("password");
     password2 = document.getElementById("password2");
      

// // firstname VALIDATION
function emptyField (event) {
let nameRegex = /^[A-Za-z]+$/;
if (firstname.value == '') {
    firstname.nextElementSibling.innerHTML = "Please enter your firstname";
    event.preventDefault()
    return false;

} if (!firstname.value.match(nameRegex)) {
    firstname.nextElementSibling.innerHTML = "Special characters are not allowed";
    event.preventDefault();
    return false;
} else {
    firstname.nextElementSibling.innerHTML = "";
    lastname.nextElementSibling.innerHTML = "";
    return true;
}
}

// Lastname validation
function nameValidation (event) {
    let nameRegex = /^[A-Za-z]+$/;
    if (lastname.value == '') {
    lastname.nextElementSibling.innerHTML = "Please enter your lastname";
    event.preventDefault()
    return false;
} 
  if (!lastname.value.match(nameRegex)) {
            lastname.nextElementSibling.innerHTML = "Special characters are not allowed";
            event.preventDefault();
            return false;
    } else {
      lastname.nextElementSibling.innerHTML = "";
        return true;
    }
}


//  Phone Number Validation
 function numberValidation(event) {
    if (phonenumber.value == '') {
        phonenumber.nextElementSibling.innerHTML = "Please enter your phone number";
        event.preventDefault()
        return false;
    } 
    let numRegex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3} )[-. ]?([0-9]{4})$/;
     if (!phonenumber.value.match(numRegex)) {
         phonenumber.nextElementSibling.innerHTML = "Please enter a valid Number";
         event.preventDefault();
         return false
     }   
     else {
         phonenumber.nextElementSibling.innerHTML = "";
         return true;
     } 
     }

     //  Email field Validation
     function emailFieldValidation(event) {
        if (mail.value == '') {
            mail.nextElementSibling.innerHTML = "Please enter your email Address";
            event.preventDefault()
            return false;
        }   
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
    if (password.value == '') {
        password.nextElementSibling.innerHTML = "Please enter your password";
        event.preventDefault()
        return false;
    } 
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
    if (password2.value == '') {
        password2.nextElementSibling.innerHTML = "Please confirm your password";
        event.preventDefault()
        return false;
    } 
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
        emptyField(e);
        nameValidation(e);
        emailFieldValidation(e);
        numberValidation(e);
        passwordValidation(e);
        password2Validation(e);
    
        return true;
    }
 form.addEventListener("submit", forms);