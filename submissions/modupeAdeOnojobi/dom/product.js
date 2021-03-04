let quantity = document.getElementById('quantity');
let price = document.getElementById('price');
let shippingCost = document.getElementById('shipping-cost');
let cost = document.getElementById('total-cost');
let button = document.getElementById('pricing-btn');
let sumPrice = Number(price.textContent) * quantity.value;

productPrice = (event) => {
    if(quantity.value <= 0) {
        quantity.nextElementSibling.textContent =  'Please enter a valid quantity';
        button.disabled = true;
        button.classList.add('disable')
        event.preventDefault();
        return false;
    } else {
        sumPrice = Number(price.textContent) * quantity.value;
        quantity.nextElementSibling.textContent = '';
        button.disabled = false;
        button.classList.remove('disable')
        return true;
    }
}

shippingAmount = () => {
    if (sumPrice < 1000) {
        shippingCost.textContent = 100;
    } else if(sumPrice >= 1000 && sumPrice <= 20000) {
        shippingCost.textContent = 0.15 * sumPrice;
    } else if(sumPrice > 20000 && sumPrice <= 100000) {
        shippingCost.textContent = 0.2 * sumPrice;
    } else {
        shippingCost.textContent = 25000;
    }
    cost.textContent = Number(shippingCost.textContent) + sumPrice;
}

InputValidation = (e) => {
    productPrice(e);
    shippingAmount();
    return true;
}

quantity.addEventListener('input', InputValidation);