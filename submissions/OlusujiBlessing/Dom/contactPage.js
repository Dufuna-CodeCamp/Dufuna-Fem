let formSubmit = document.getElementById("validateform");
    fullname = document.getElementById("fullname");
    emailaddress = document.getElementById("emailaddress");
    subject = document.getElementById("subject");
    comments = document.getElementById("comments");

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
function fullnameValidation(event){
    event.preventDefault();
    let fullNameRegex = /^[a-zA-Z][a-zA-Z0-9]*$/;
    if (fullname.value === '') {
       fullname.nextElementSibling.innerHTML = "Please enter your Name";
       return false;
   }else if (!fullname.value.match(fullNameRegex)){
       fullname.nextElementSibling.innerHTML ="Please enter a valid Name without special characters";
       return false;
   } else {
       fullname.nextElementSibling.innerHTML =" ";
       return true;
   }
}
function emailFieldValidation(event){
    event.preventDefault();
    let eemailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (emailaddress.value === '') {
       emailaddress.nextElementSibling.innerHTML ="Please enter your email address";
       return false;
   }
    else if (!emailaddress.value.match(eemailRegex)){
       emailaddress.nextElementSibling.innerHTML ="Please enter a valid email";
       return false;
   } else  {
       emailaddress.nextElementSibling.innerHTML =" ";
       return true;
   }
}
function subjectValidation(event){
    event.preventDefault();
    if (subject.value === '') {
       subject.nextElementSibling.innerHTML ="Please enter message subject";
       return false;
    } else {
       subject.nextElementSibling.innerHTML =" ";
       return true;
   }
}
function commentsValidation(event){
    event.preventDefault();
    if (comments.value === '') {
       comments.nextElementSibling.innerHTML ="Please enter your message";
       return false;
    }else{
       comments.nextElementSibling.innerHTML =" ";
       return true;
   }
}
function formValidate(e){
    fullnameValidation(e);
    emailFieldValidation(e);
    subjectValidation(e);
    commentsValidation(e);
    return true;
}
formSubmit.addEventListener("submit", formValidate);
