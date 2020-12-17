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


//EXAMPLE

let item = document.getElementById("quantityBox")
    button = document.getElementById("buyNow");
    shippingCost = document.getElementById("shippingCost");
    cost = document.getElementById("totalCost");
    price = document.getElementById("price");

//initial value
let priceValue = price.innerHTML,
    costValue = cost.innerHTML;
//RegEx
const Regex = /^[1-9]/;
function calculateQuantity() {
    if (!item.value.match(Regex)) {
        button.disable = true
        button.style = "background-color: grey"
        item.nextElementSibling.innerHTML = "⚠️Please enter a valid quantity";
    } else {
        button.disabled = false;
        item.nextElementSibling.innerHTML = "";
    }
}
function calculatePrice() {
    if (item.value >= 1) {
        let perPrice = "$ " + (2500 * item.value)
        price.innerHTML = perPrice
    } else if (item.value === "") {
        price.innerHTML = priceValue
        cost.innerHTML = costValue
    }
    else {
        return false
    }
}
function calculateShippingPrice() {
    let perPrice = (2500 * item.value)
    if (perPrice < 1000) {
        let shippingRange = 100;
        shippingCost.innerHTML = shippingRange;
    } else if ((perPrice >= 1000) && (perPrice <= 20000)) {
        shippingRange = 0.15 * perPrice;
        shippingCost.innerHTML = shippingRange;
    } else if ((perPrice >= 20000) && (perPrice <= 100000)) {
        shippingRange = 0.2 * perPrice;
        shippingCost.innerHTML = shippingRange;
    } else if (perPrice >= 100000) {
        shippingRange = 25000;
        shippingCost.innerHTML = shippingRange;
    } else {
        return false
    }
}
function calculateTotalPrice() {
    if (item.value >= 1) {
        let perPrice = (2500 * item.value);
            shipCost = Number(shippingCost.innerHTML);
        cost.innerHTML = "$ " + (perPrice + shipCost);
    } else {
        return false;
    }
}

function calculate() {
    calculateQuantity();
    calculatePrice();
    calculateShippingPrice();
    calculateTotalPrice();

}

item.addEventListener("input", calculate);