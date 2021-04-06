let quantity = document.getElementById('quantity'),
    price = document.getElementById('price'),
    shippingCost = document.getElementById('shippingCost'),
    totalCost = document.getElementById('totalCost'),
    button = document.getElementById('buyNow'),
    productPrice = Number(price.innerHTML) * quantity.value;
    totalCost.innerHTML = Number(shippingCost.innerHTML) + productPrice;

function quantityCheck (event) {
    if (quantity.value <= 0){
        quantity.nextElementSibling.innerHTML = 'please enter a valid quantity';
        button.disabled = true;
        button.style = 'background-color: grey';
        event.preventDefault();
        return false;
    } else {
        productPrice = price.innerHTML * quantity.value
        quantity.nextElementSibling.innerHTML = '';
        button.disabled = false;
        return true;
    }
}

function productPriceCheck (event) {
    if (quantity.value >= 1){
        price.innerHTML = productPrice;
    } else if (quantity.value ===''){
        price.innerHTML = 25000;
    }else {
        return false;
    }
}

function shippingPriceCheck (event){
    if (productPrice < 1000){
        shippingCost.innerHTML = 100;
        } else if (productPrice >= 1000 && productPrice <= 20000) {
            shippingCost.innerHTML = 0.15 * productPrice;
        }else if (productPrice >= 20000 && productPrice <= 100000){
            shippingCost.innerHTML = 0.20 * productPrice;
        } else { 
            shippingCost.innerHTML = 25000;
            return true;
        }
}

function totalCostCheck (event){
    if (quantity.value >= 1){
        totalCost.innerHTML = Number(shippingCost.innerHTML) + productPrice;
    }else {
        return false;
    }
}

function productPageValidation (e){
    quantityCheck (e);
    shippingPriceCheck(e);
    productPriceCheck(e);
    totalCostCheck(e);
    return true
}

quantity.addEventListener ('input', productPageValidation);