let formSubmission = document.getElementById("validation");
    email = document.getElementById("email");


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
    function emailFieldValuation(event){
        event.preventDefault();
        let emailregex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (email.value === '') {
           document.getElementById("errormessage").innerHTML ="Please enter your email address";
           return false;
       }
        else if (!email.value.match(emailregex)){
           document.getElementById("errormessage").innerHTML ="Please enter a valid email";
           return false;
       } else  {
           document.getElementById("errormessage").innerHTML =" ";
           return true;
       }
    }

    function verifyform(e){
        emailFieldValuation(e);
        return true;
    }
    
    formSubmission.addEventListener("submit", verifyform);


