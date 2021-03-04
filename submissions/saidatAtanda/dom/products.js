let quantity = document.getElementById('quantity');
let price = document.getElementById('price');
let pricePerUnit = price.innerHTML;
let shippingCost = document.getElementById('shipping-cost');
let totalCost = document.getElementById('total-cost');
let quantityRegex = /^[1-9]+[0-9]*$/;
let button = document.getElementById('product-btn');
let productPrice;

quantityField = () => {
    if (!quantity.value.match(quantityRegex) ){
        quantity.nextElementSibling.innerHTML ='please enter a valid quantity';
        button.disabled = true;
        return false;
    } else {
        quantity.nextElementSibling.innerHTML = "";
        button.disabled = false;
        return true;
    }
}

shippingPrice = () => {
    productPrice = pricePerUnit * quantity.value;
    if (quantity.value >= 1) {
        price.innerHTML = productPrice;
    }
    if (productPrice < 1000){
        shippingCost.innerHTML = 100;
    }else if (productPrice >= 1000 && productPrice <= 20000) {
        shippingCost.innerHTML = 0.15 * productPrice;
    }else if (productPrice > 20000 && productPrice <= 100000) {
        shippingCost.innerHTML = 0.20 * productPrice;
    }else if (productPrice > 100000) {
        shippingCost.innerHTML = 25000;
    } else {
        return false;
    }
}

totalProductPrice = () => {
    if (quantity.value >= 1){
        totalCost.innerHTML = productPrice + parseInt(shippingCost.innerHTML);
    } else {
        return false;
    }
}

PriceValidation = () => {
    quantityField();
    shippingPrice();
    totalProductPrice();
    return true;
}

quantity.addEventListener("input", PriceValidation);