//footer form validation
let submitForm1 = document.getElementById('verifyForm'),
    footerEmail = document.getElementById('footerEmail');

    function footeremailvalidation(event) {
        let emailRegex =  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;;
        if (!footerEmail.value.match(emailRegex)) {
            footerEmail.nextElementSibling.innerHTML = "Please enter a valid email";
            event.preventDefault();
    
        if (footerEmail.value == '')
            footerEmail.nextElementSibling.innerHTML = "Please enter your Email Address";
            event.preventDefault();
            return false;
        }   
        
        else {
            footerEmail.nextElementSibling.innerHTML = "";
            return true;
        }
    }

    function verifyForm(e) {
        footeremailvalidation(e);
        return true;  
    }
    
    submitForm1.addEventListener("submit", verifyForm);