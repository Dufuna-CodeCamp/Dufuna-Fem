let form = document.getElementById("sign");
     firstname = document.getElementById("firstname");
     lastname = document.getElementById("lastname");
     othername = document.getElementById("othername");
     phonenumber = document.getElementById("phonenumber");
     mail  = document.getElementById("mail");
     password = document.getElementById("password");
     password2 = document.getElementById("password2");
     nameRegex = /^[A-Za-z]+$/;
     numRegex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3} )[-. ]?([0-9]{4})$/;
     emailRegex = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/;
     pwdRegex = /^(?=.*?[A-Z])(?=(.*[a-z]){1,})(?=(.*[\d]){1,})(?=(.*[\W]){1,})(?!.*\s).{8,}$/; 

// // firstname VALIDATION
function emptyField (event) {
    if (firstname.value == '') {
        firstname.nextElementSibling.innerHTML = "Please enter your firstname";
        event.preventDefault();
}
     if (lastname.value == '') {
            lastname.nextElementSibling.innerHTML = "Please enter your lastname";
            event.preventDefault()
        }
    
    if (phonenumber.value == '') {
                phonenumber.nextElementSibling.innerHTML = "Please enter your phone number";
                event.preventDefault()
            }
    
     if (mail.value == '') {
            mail.nextElementSibling.innerHTML = "Please enter your email Address";
         event.preventDefault()
        }
    
     if (password.value == '') {
            password.nextElementSibling.innerHTML = "Please enter your password";
            event.preventDefault();
        }
        
     if (password2.value == '') {
                password2.nextElementSibling.innerHTML = "Please confirm your password";
                event.preventDefault()
                return false;
        } else {
            firstname.nextElementSibling.innerHTML = "";
            lastname.nextElementSibling.innerHTML = "";
            return true;
        }
    }
                    

function fieldValidation (event) {
    if (!firstname.value.match(nameRegex)) 
    firstname.nextElementSibling.innerHTML = "Special characters are not allowed";
    event.preventDefault();

    if (!lastname.value.match(nameRegex)) 
    lastname.nextElementSibling.innerHTML = "Special characters are not allowed";
     event.preventDefault();
  
    if (!phonenumber.value.match(numRegex)) 
     phonenumber.nextElementSibling.innerHTML = "Please enter a valid Number";
    event.preventDefault();

    if (!mail.value.match(emailRegex)) 
        mail.nextElementSibling.innerHTML = "Please enter a valid email";
         event.preventDefault();
        

    if (!password.value.match(pwdRegex)) 
    password.nextElementSibling.innerHTML = "Your password should have a minimum of 6 characters, 1 capital letter, 1 special character eg @ and 1 number";
         event.preventDefault();
        

    if (!(password.value.length >= 6)) 
        password.nextElementSibling.innerHTML = "Your password length must have a minimum of 6 characters";
         event.preventDefault();
    

    if (password2 !== password) {
     password2.nextElementSibling.innerHTML = "Your passwords don't match"
    event.preventDefault();
   return false
      }
        else {
    field.nextElementSibling.innerHTML = "";
        return true;
            }
        }
        

   
    form.addEventListener("submit", fieldValidation);
    form.addEventListener("submit", emptyField);
 