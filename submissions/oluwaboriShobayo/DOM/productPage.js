let  Sform = document.getElementById("form");
     quantity = document.getElementById("quantity")
     shippingCost = document.getElementById("shippingCost");
     totalCost = document.getElementById("totalCost");
     button = document.getElementById("button");
     price = document.getElementById("price");
     numRegex = /^[1-9]/;
 

    function numberValidation (event) {
    if (quantity.value == '' || !quantity.value.match(numRegex)){
        button.disabled = true;
        button.style.backgroundColor = "#808080"
        quantity.nextElementSibling.innerHTML = "Please enter a valid quantity";
        event.preventDefault()
        return false;
    }   
    else {
        quantity.nextElementSibling.innerHTML = "";
        button.disabled = false;
        return true;
    }
}

function calculateproductPrice () {
    let priceperUnit = 8000;
    if (quantity.value >=1) {
    let   productPrice = (priceperUnit * quantity.value)
          price.innerHTML = productPrice
          calculateShippingCost(productPrice)
          calculateTotalCost(productPrice)
    }
}
    
function calculateShippingCost(productPrice) {
    if (productPrice < 1000) {
                calculatedShipping = 100
                shippingCost.innerHTML = calculatedShipping
        } 
    else if (productPrice >= 1000 && productPrice <= 20000) {
               calculatedShipping = productPrice * 15/100
               shippingCost.innerHTML = calculatedShipping
    } 
    else if (productPrice >= 20000 && productPrice <= 100000) {
                calculatedShipping = productPrice * 20/100
                shippingCost.innerHTML = calculatedShipping
    }
    else if (productPrice > 100000)
                calculatedShipping = 25000
                shippingCost.innerHTML = calculatedShipping;
}

function calculateTotalCost(productPrice) {
             let total = (calculatedShipping + productPrice)
             totalCost.innerHTML = total 
    }
    
function  validateForm(e) {
          numberValidation(e);
          calculateproductPrice(e)
    return true;
}

Sform.addEventListener("input", validateForm);
Sform.addEventListener("submit", validateForm);

// / FOOTER VALIDATION
let form1 = document.getElementById("footerForm");
    footeremail = document.getElementById("Submit");
    emailRegex = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/;

    function emptyField (fieldName, Regex, errorMessage1, errorMessage2, event) {
        if (fieldName.value == '') {
            fieldName.nextElementSibling.innerHTML = errorMessage1;
            event.preventDefault()
            return false
        } if (!fieldName.value.match(Regex)) {
            fieldName.nextElementSibling.innerHTML = errorMessage2
            event.preventDefault();
            return false;
        } else {
            fieldName.nextElementSibling.innerHTML = "";
            return true;
        }
      }

function Validation(e) {
    emptyField(footeremail, emailRegex, "Please enter your email address", "Please enter a valid email",e);
    return true;
}
form1.addEventListener("submit", Validation);

