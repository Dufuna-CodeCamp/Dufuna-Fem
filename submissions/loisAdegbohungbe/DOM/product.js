let quantity = document.getElementById('quantity');
let price = document.getElementById('price');
let shippingCost = document.getElementById('shipping-cost');
let totalCost = document.getElementById('total-cost');
let button = document.getElementById('buy-btn');

calculatePrice = (event) => {
    if(quantity.value <= 0) {
        quantity.nextElementSibling.innerHTML =  'Please enter a valid quantity';
        button.disabled = true;
        button.classList.add('disable')
        event.preventDefault();
        return false;
    } else {
        price.innerHTML = 50400 * quantity.value;
        quantity.nextElementSibling.innerHTML = '';
        button.disabled = false;
        button.classList.remove('disable')
        return true;
    }
}

addShippingCost = () => {
    if (price.innerHTML < 1000) {
        shippingCost.innerHTML = 100;
    } else if(price.innerHTML >= 1000 && price.innerHTML <= 20000) {
        shippingCost.innerHTML = 0.15 * price.innerHTML;
    } else if(price.innerHTML > 20000 && price.innerHTML <= 100000) {
        shippingCost.innerHTML = 0.2 * price.innerHTML;
    } else {
        shippingCost.innerHTML = 25000;
    }
    totalCost.innerHTML = Number(shippingCost.innerHTML) + Number(price.innerHTML);
}

InputValidation = (e) => {
    calculatePrice(e);
    addShippingCost();
    return true;
}

quantity.addEventListener('input', InputValidation);