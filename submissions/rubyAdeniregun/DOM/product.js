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

//validate "buynow" button
let submitForm = document.getElementById('validateForm'),
    item = document.getElementById("quantityBox")
    btn = document.getElementById("buyNow");


function qtyValidation(event) {
    let positiveRegex =  /^\d+$/;
    if (!item.value.match(positiveRegex)) {
        item.nextElementSibling.innerHTML = "Please enter a valid quantity";
        btn.disabled = true;
        event.preventDefault();
        console.dir(btn)
        

    if (item.value == '')
        item.nextElementSibling.innerHTML = "Please enter the quantity";
        event.preventDefault();
        return false;
    }   
    
    else {
        item.nextElementSibling.innerHTML = "";
        btn.enabled = false;
        return true;
    }
}

function validateForm(e){
    qtyValidation(e);
    return true;  
}

submitForm.addEventListener("submit", validateForm);

//Product Price calculation
let price = document.getElementById("price");

pricing = 2500 * item.value;
function calculate(pricing, value) {
    if (item.value == '>=1') {
        price.innerHTML = "pricing";

}   else { 
    price.innerHTML = "2,500";
    return true;
    }
}
