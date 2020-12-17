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


let submitForm = document.getElementById('validateForm'),
    item = document.getElementById("quantityBox")
    button = document.getElementById("buyNow");
    shippingCost = document.getElementById("shippingCost");
    cost = document.getElementById("totalCost");
    price = document.getElementById("price");
let priceValue = price.innerHTML;
let costValue = cost.innerHTML;
let shippingValue = shippingCost.innerHTML;


//Product quantity calculation

function calculateQuantity() {
    if (item.value >= 1) {
        calculatePrice();
    } else if (item.value === "") {
        price.innerHTML = priceValue
        cost.innerHTML = costValue
    }
    else {
        return false
    }
}

//Product Price calculation
function calculatePrice() {
if (item.value >= 1) {
    let perPrice = priceValue * item.value;
    price.innerHTML = perPrice;
    
}   else if (item.value === "") {
    price.innerHTML = priceValue;
    cost.innerHTML = costValue;

}
    else {
    return false;
    }
}

function calculatePrice() {
if (item.value >= 1) {
    let perPrice = priceValue * item.value;
    price.innerHTML = perPrice;
    
}   else if (item.value === "") {
    price.innerHTML = priceValue;
    cost.innerHTML = costValue;

}
    else {
    return false;
    }
}

//shipping Price calculation
function calculateShipping() {
    let perPrice = priceValue * item.value
        if (perPrice < 1000) {
        let shippingRange = 100;
        shippingCost.innerHTML = shippingRange;    
    }

    else if ((perPrice >= 1000) && (perPrice <= 20000)) {
        shippingRange = 0.15 * perPrice;
        shippingCost.innerHTML = shippingRange;

    }
    else if ((perPrice >= 20000) && (perPrice <= 100000)) {
        shippingRange = 0.2 * perPrice;
        shippingCost.innerHTML = shippingRange;

    }

    else if (perPrice >= 100000) {
        shippingRange = 25000;
        shippingCost.innerHTML = shippingRange;
    }
    
    else {
    return false;
        }
}

// Total Price calculation
function totalPrice() {
if (item.value >= 1) {
    let perPrice = priceValue * item.value,
            shipCost = Number(shippingCost.innerHTML);
        cost.innerHTML = perPrice + shipCost;
    } else {
        return false;
    }
}

function calculate() {
    calculatePrice();
    calculateShipping();
    totalPrice();
}

item.addEventListener("input", calculate);
    

function calculateQuantity(event) {
    let positiveRegex =  /^[1-9]/;
    if (!item.value.match(positiveRegex)) {
        button.disable = true
        button.style = "background-color: grey"
        item.nextElementSibling.innerHTML = "Please enter a valid quantity";
        event.preventDefault();        

    if (item.value == '')
        item.nextElementSibling.innerHTML = "Please enter the quantity";
        event.preventDefault();
        return false;
    }   
    
    else {
        item.nextElementSibling.innerHTML = "";
        button.disabled = false;
        return true;
    }
}

function validateForm(e){
    calculateQuantity(e);
    return true;  
}

submitForm.addEventListener("submit", validateForm);
