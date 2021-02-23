let submitForm = document.getElementById("validateform");
    firstname = document.getElementById("firstname");
    lastname = document.getElementById("lastname");
    othername = document.getElementById("othername");
    phonenumber = document.getElementById("phonenumber");
    emailaddress = document.getElementById("emailaddress");
    password = document.getElementById("password");
    confirmPassword = document.getElementById("confirmPassword");
    agree = document.getElementById("lab");
    bttn= document.getElementById("bttn");
    
function required(field, e){
    e.preventDefault();
    if (field.value === ""){
    field.nextElementSibling.innerHTML ="This field is required";
    e.preventDefault();
    return false;
    }else{
        field.nextElementSibling.innerHTML= " ";
        return true;
    }
}
function emailFieldValidation(event){
     let emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
     if(emailaddress.value === ''){
        emailaddress.nextElementSibling.innerHTML ="Please enter your email address";
        return false;
    }else if(!emailaddress.value.match(emailRegex)){
        emailaddress.nextElementSibling.innerHTML ="Please enter a valid email";
        return false;
    }else{
        emailaddress.nextElementSibling.innerHTML =" ";
        return true;
    }
}
function firstNameValidation(event){
    let firstnameRegex = /^[a-zA-Z][a-zA-Z0-9]*$/;
    if(firstname.value === ''){
       firstname.nextElementSibling.innerHTML ="Please enter your First Name";
       return false;
   }else if(!firstname.value.match(firstnameRegex)){
       firstname.nextElementSibling.innerHTML =" Please enter a valid name without special characters";
       return false;
   } else{
       firstname.nextElementSibling.innerHTML =" ";
       return true;
   }
}
function lastNameValidation(event){
    let lastnameRegex = /^[a-zA-Z][a-zA-Z0-9]*$/;
    if (lastname.value === ''){
       lastname.nextElementSibling.innerHTML ="Please enter your Last Name";
       return false;
   }else if (!lastname.value.match(lastnameRegex)){
       lastname.nextElementSibling.innerHTML ="Please enter a valid lastname without special characters";
       return false;
   }else{
       lastname.nextElementSibling.innerHTML =" ";
       return true;
   }
}
function phoneNumberValidation(event){
    let phoneNumberRegex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
    if(phonenumber.value === ''){
       phonenumber.nextElementSibling.innerHTML ="Please enter your Phone Nunber ";
       return false;
   }else if(!phonenumber.value.match(phoneNumberRegex)){
       phonenumber.nextElementSibling.innerHTML ="Please enter a valid phone number";
       return false;
   }else{
       phonenumber.nextElementSibling.innerHTML =" ";
       return true;
   }
}
function passwordValidation(event){
    let passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/ ;
    if (password.value === ''){
       password.nextElementSibling.innerHTML ="Please enter your Password ";
       return false;
   }else if(!password.value.match(passwordRegex)){
       password.nextElementSibling.innerHTML ="Your password should have a minimum of 6 characters, 1 capital letter, 1 special character eg @ and 1 number.";
       return false;
   }else{
       password.nextElementSibling.innerHTML =" ";
       return true;
   }
}
function confirmPasswordValidation(event){
    let confirmPasswordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/ ;
    if (confirmPassword.value === ''){
       confirmPassword.nextElementSibling.innerHTML ="Please confirm your password ";
       return false;
   }else if (!confirmPassword.value === password.value){
       confirmPassword.nextElementSibling.innerHTML ="Your password should have a minimum of 6 characters, 1 capital letter, 1 special character eg @ and 1 number.";
       return false;
   }else if (!confirmPassword.value.match(confirmPasswordRegex)){
    confirmPassword.nextElementSibling.innerHTML ="Your password dont match";
    return false;
}else{
       confirmPassword.nextElementSibling.innerHTML =" ";
       return true;
}
}
function checkboxValidation(event){
    if (agree.oncheck == fasle){
       agree.nextElementSibling.innerHTML ="Please check the box";
       return false;
    }else{ 
       agree.nextElementSibling.innerHTML =" ";
       return true;
    }
}
function validateForm(e){
    lastNameValidation(e);
    phoneNumberValidation(e);
    passwordValidation(e);
    confirmPasswordValidation(e);
    emailFieldValidation(e);
    firstNameValidation(e);
    checkboxValidation(e);
    return true;
}
submitForm.addEventListener("submit", validateForm);



